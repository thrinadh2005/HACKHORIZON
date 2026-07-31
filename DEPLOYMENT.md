# CycloneGuard GVMC - Production Deployment Guide

## 🚀 Production Deployment Instructions

This guide provides step-by-step instructions for deploying CycloneGuard GVMC to production.

### Prerequisites

- Docker and Docker Compose installed
- MongoDB Atlas account (production cluster)
- Redis instance (Redis Cloud or self-hosted)
- Domain name configured
- SSL/TLS certificates (Let's Encrypt or commercial)
- Cloud provider account (AWS/GCP/Azure)
- Basic knowledge of Docker and container orchestration

---

## 📋 Pre-Deployment Checklist

### 1. Environment Configuration

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` with production values:

```env
# Environment
ENVIRONMENT=production

# Database
MONGODB_URL=mongodb+srv://username:password@production-cluster.mongodb.net/
MONGODB_DB_NAME=cycloneguard_production

# Security
SECRET_KEY=your-super-secret-key-generate-with-python-secrets
# Generate with: python -c "import secrets; print(secrets.token_urlsafe(32))"

# CORS
ALLOWED_ORIGINS=https://yourdomain.com,https://app.yourdomain.com

# Redis
REDIS_URL=redis://username:password@redis-host:port/0

# Microsoft Entra ID (if using)
ENTRA_CLIENT_ID=your-client-id
ENTRA_TENANT_ID=your-tenant-id
ENTRA_REDIRECT_URI=https://yourdomain.com/auth/callback

# Monitoring (optional)
SENTRY_DSN=your-sentry-dsn
ENABLE_METRICS=true
```

### 2. Generate Secrets

```bash
# Generate JWT secret key
python -c "import secrets; print(secrets.token_urlsafe(32))"

# Generate MongoDB password (use strong password)
# Configure in MongoDB Atlas dashboard
```

### 3. Prepare Infrastructure

#### MongoDB Atlas Setup
1. Create a production cluster
2. Configure whitelist for your server IPs
3. Create database user with appropriate permissions
4. Enable backup and monitoring
5. Note connection string

#### Redis Setup
1. Create Redis Cloud instance or set up self-hosted Redis
2. Configure security groups
3. Enable persistence
4. Note connection URL

---

## 🐳 Docker Deployment

### Local Testing with Docker Compose

```bash
# Build and start all services
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Production Docker Deployment

#### 1. Build Docker Images

```bash
# Build backend image
docker build -t cycloneguard-backend:latest .

# Build frontend image
cd frontend
docker build -t cycloneguard-frontend:latest .
cd ..
```

#### 2. Tag Images for Registry

```bash
# Tag for Docker Hub
docker tag cycloneguard-backend:latest your-dockerhub-username/cycloneguard-backend:latest
docker tag cycloneguard-frontend:latest your-dockerhub-username/cycloneguard-frontend:latest
```

#### 3. Push to Registry

```bash
# Login to Docker Hub
docker login

# Push images
docker push your-dockerhub-username/cycloneguard-backend:latest
docker push your-dockerhub-username/cycloneguard-frontend:latest
```

#### 4. Deploy on Server

```bash
# Pull images on production server
docker pull your-dockerhub-username/cycloneguard-backend:latest
docker pull your-dockerhub-username/cycloneguard-frontend:latest

# Run with docker-compose
docker-compose -f docker-compose.prod.yml up -d
```

---

## ☸️ Kubernetes Deployment

### 1. Create Kubernetes Manifests

Create `k8s/namespace.yaml`:
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: cycloneguard
```

Create `k8s/configmap.yaml`:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: cycloneguard-config
  namespace: cycloneguard
data:
  ENVIRONMENT: "production"
  API_V1_STR: "/api/v1"
  ENABLE_METRICS: "true"
```

Create `k8s/secret.yaml`:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: cycloneguard-secrets
  namespace: cycloneguard
type: Opaque
stringData:
  MONGODB_URL: "your-mongodb-url"
  SECRET_KEY: "your-secret-key"
  REDIS_URL: "your-redis-url"
```

Create `k8s/backend-deployment.yaml`:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  namespace: cycloneguard
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: your-dockerhub-username/cycloneguard-backend:latest
        ports:
        - containerPort: 8000
        envFrom:
        - configMapRef:
            name: cycloneguard-config
        - secretRef:
            name: cycloneguard-secrets
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5
```

Create `k8s/frontend-deployment.yaml`:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  namespace: cycloneguard
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: your-dockerhub-username/cycloneguard-frontend:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
```

Create `k8s/service.yaml`:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend-service
  namespace: cycloneguard
spec:
  selector:
    app: backend
  ports:
  - protocol: TCP
    port: 8000
    targetPort: 8000
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
  namespace: cycloneguard
spec:
  selector:
    app: frontend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```

### 2. Deploy to Kubernetes

```bash
# Apply all manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get deployments -n cycloneguard
kubectl get pods -n cycloneguard
kubectl get services -n cycloneguard

# View logs
kubectl logs -n cycloneguard -l app=backend -f
```

---

## 🔒 SSL/TLS Configuration

### Using Let's Encrypt with Certbot

```bash
# Install certbot
sudo apt-get install certbot

# Generate certificates
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com

# Certificates will be in /etc/letsencrypt/live/yourdomain.com/
```

### Configure Nginx with SSL

Update `frontend/nginx.conf`:

```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # ... rest of configuration
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

---

## 📊 Monitoring Setup

### Prometheus Configuration

Create `prometheus.yml`:

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'cycloneguard-backend'
    static_configs:
      - targets: ['backend-service:8000']
    metrics_path: '/metrics'
```

### Grafana Dashboard

1. Install Grafana
2. Add Prometheus as data source
3. Import dashboard for FastAPI metrics
4. Set up alerts for:
   - High error rates
   - Slow response times
   - High memory usage
   - Database connection issues

---

## 🧪 Testing Deployment

### Health Checks

```bash
# Backend health
curl https://yourdomain.com/health

# Frontend health
curl https://yourdomain.com/

# API docs
curl https://yourdomain.com/api/v1/docs
```

### Load Testing

```bash
# Install locust
pip install locust

# Run load test
locust -f loadtest.py --host=https://yourdomain.com
```

---

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci-cd.yml`) includes:

1. **Backend Tests**: Python tests with coverage
2. **Frontend Tests**: TypeScript type checking and linting
3. **Security Scanning**: Trivy vulnerability scanner
4. **Docker Build**: Build and push Docker images
5. **Deployment**: Automatic deployment to staging/production

### Required GitHub Secrets

- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password/token
- `SLACK_WEBHOOK`: Slack webhook for notifications

---

## 📝 Post-Deployment Tasks

### 1. Database Seeding

```bash
# Run seed script
python start.py
```

### 2. User Setup

- Create admin user
- Configure Microsoft Entra ID integration
- Set up user roles and permissions

### 3. Monitoring Configuration

- Set up Prometheus targets
- Configure Grafana dashboards
- Set up alerting rules
- Configure Sentry for error tracking

### 4. Backup Configuration

- Configure MongoDB Atlas backups
- Set up Redis persistence
- Configure application backups

### 5. Security Hardening

- Configure firewall rules
- Set up intrusion detection
- Configure audit logging
- Enable security headers

---

## 🚨 Troubleshooting

### Common Issues

**MongoDB Connection Failed**
```bash
# Check connection string
# Verify IP whitelist in MongoDB Atlas
# Check network connectivity
```

**High Memory Usage**
```bash
# Check resource limits in Kubernetes
# Scale horizontally
# Optimize database queries
```

**Slow Response Times**
```bash
# Check database query performance
# Enable caching
# Scale backend instances
```

**WebSocket Connection Issues**
```bash
# Check load balancer configuration
# Verify WebSocket support
# Check firewall rules
```

---

## 📈 Performance Optimization

### Backend Optimization
- Enable database connection pooling
- Implement Redis caching
- Use CDN for static assets
- Enable gzip compression
- Optimize database queries

### Frontend Optimization
- Enable code splitting
- Implement lazy loading
- Optimize images
- Enable browser caching
- Use CDN for static assets

---

## 🔐 Security Best Practices

1. **Regular Updates**: Keep dependencies updated
2. **Secrets Management**: Use environment variables or secret managers
3. **Network Security**: Configure firewall rules and security groups
4. **Monitoring**: Set up security monitoring and alerting
5. **Backups**: Regular automated backups
6. **Access Control**: Implement proper RBAC
7. **Audit Logging**: Enable comprehensive audit logging

---

## 📞 Support

For deployment issues:
- Check logs: `docker-compose logs -f`
- Review monitoring dashboards
- Check error tracking in Sentry
- Review documentation in README.md

---

## 🎯 Success Criteria

Deployment is successful when:
- ✅ All health checks pass
- ✅ API endpoints respond correctly
- ✅ Frontend loads without errors
- ✅ PWA features work (installable, offline)
- ✅ Monitoring data is collected
- ✅ Security headers are present
- ✅ SSL/TLS is configured
- ✅ Backups are configured
- ✅ Alerts are configured

---

**Last Updated**: July 2026
**Version**: 1.0.0
