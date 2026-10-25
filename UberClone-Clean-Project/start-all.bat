@echo off
echo ========================================================
echo Starting Full-Stack Uber Clone...
echo ========================================================

start "Uber Backend (Port 3000)" cmd /k "cd /d \"%~dp0backend\" && npm start"
start "Uber Frontend (Port 5173)" cmd /k "cd /d \"%~dp0frontend\" && npm run dev"

echo.
echo Application is starting!
echo Backend & Socket.io: http://localhost:3000
echo Frontend (Rider & Captain): http://localhost:5173
echo.
pause
