import logging
import time

logger = logging.getLogger("cycloneguard")
logger.setLevel(logging.INFO)

_start_time = time.time()

try:
    from prometheus_fastapi_instrumentator import Instrumentator
    PROMETHEUS_AVAILABLE = True
except ImportError:
    PROMETHEUS_AVAILABLE = False

class MonitoringService:
    def __init__(self):
        self.start_time = _start_time

    def init_app(self, app):
        if PROMETHEUS_AVAILABLE:
            try:
                Instrumentator().instrument(app).expose(app)
            except Exception as e:
                logger.warning(f"Prometheus instrumentation skipped: {e}")

    def get_uptime(self) -> float:
        return time.time() - self.start_time

    def info(self, msg: str, extra: dict = None):
        logger.info(f"{msg} | Extra: {extra}")

    def error(self, msg: str, extra: dict = None):
        logger.error(f"{msg} | Extra: {extra}")

StructuredLogger = MonitoringService
monitoring_service = MonitoringService()

def setup_sentry(app=None):
    pass

