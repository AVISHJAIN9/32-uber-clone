@echo off
echo ========================================================
echo Installing All Dependencies for Uber Clone
echo ========================================================

echo.
echo [1/2] Installing Backend Dependencies...
cd backend
call npm install --legacy-peer-deps
cd ..

echo.
echo [2/2] Installing Frontend Dependencies...
cd frontend
call npm install --legacy-peer-deps
cd ..

echo.
echo ========================================================
echo All dependencies installed successfully!
echo ========================================================
pause
