@echo off
setlocal enabledelayedexpansion
title CycloneGuard GVMC - Startup

:: ============================================================
:: CycloneGuard GVMC - One-Click Startup Script
:: Starts Backend (FastAPI on :8000) + Frontend (Vite on :5173)
:: ============================================================

cls
echo.
echo  ========================================================
echo   CYCLONEGUARD GVMC - Enterprise Disaster Management
echo   Visakhapatnam Municipal Corporation
echo  ========================================================
echo.

:: ── 1. Check Python ──────────────────────────────────────────
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Python not found. Please install Python 3.11+ and try again.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('python --version 2^>^&1') do echo  [OK] %%v found

:: ── 2. Check Node.js ─────────────────────────────────────────
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js not found. Please install Node.js 22+ and try again.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node --version 2^>^&1') do echo  [OK] Node.js %%v found

:: ── 3. Check/Load .env ───────────────────────────────────────
if not exist ".env" (
    echo.
    echo  [INFO] No .env found. Copying from .env.example ...
    if exist ".env.example" (
        copy ".env.example" ".env" >nul
        echo  [OK] .env created from .env.example
        echo  [WARN] Please update MONGODB_URL and SECRET_KEY in .env before production use.
    ) else (
        echo  [WARN] No .env.example found. Continuing with defaults.
    )
)

:: ── 4. Install Python dependencies ───────────────────────────
echo.
echo  [INFO] Installing Python dependencies ...
pip install -r requirements.txt --quiet
if %errorlevel% neq 0 (
    echo  [ERROR] Failed to install Python dependencies.
    pause
    exit /b 1
)
echo  [OK] Python dependencies ready.

:: ── 5. Install Frontend dependencies ─────────────────────────
echo.
echo  [INFO] Installing frontend dependencies ...
cd frontend
call npm install --silent 2>nul
if %errorlevel% neq 0 (
    echo  [ERROR] npm install failed in frontend/.
    cd ..
    pause
    exit /b 1
)
cd ..
echo  [OK] Frontend dependencies ready.

:: ── 6. Launch Backend in a new terminal window ───────────────
echo.
echo  [INFO] Starting Backend: FastAPI on http://localhost:8000 ...
start "CycloneGuard Backend" cmd /k "title CycloneGuard-Backend ^& echo. ^& echo  [Backend] FastAPI starting on http://localhost:8000 ... ^& echo. ^& python start.py"

:: Short wait so backend gets a head start
timeout /t 3 /nobreak >nul

:: ── 7. Launch Frontend in a new terminal window ──────────────
echo  [INFO] Starting Frontend: Vite dev server on http://localhost:5173 ...
start "CycloneGuard Frontend" cmd /k "title CycloneGuard-Frontend ^& echo. ^& echo  [Frontend] Vite dev server starting on http://localhost:5173 ... ^& echo. ^& cd frontend ^& npm run dev"

:: Short wait for Vite to spin up
timeout /t 4 /nobreak >nul

:: ── 8. Open browser ──────────────────────────────────────────
echo.
echo  [INFO] Opening browser at http://localhost:5173 ...
start "" "http://localhost:5173"

:: ── 9. Done ──────────────────────────────────────────────────
echo.
echo  ========================================================
echo   CycloneGuard GVMC is running!
echo.
echo   Frontend  :  http://localhost:5173
echo   Backend   :  http://localhost:8000
echo   API Docs  :  http://localhost:8000/api/v1/docs
echo.
echo   Login     :  commissioner@gvmc.gov.in
echo   Password  :  password123
echo.
echo   Close the Backend and Frontend terminal windows to stop.
echo  ========================================================
echo.
pause
endlocal
