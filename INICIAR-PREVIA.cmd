@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Para usar este servidor de previa, instale o Node.js.
  echo Voce tambem pode extrair o ZIP e abrir index.html diretamente.
  pause
  exit /b 1
)
node preview.cjs
pause
