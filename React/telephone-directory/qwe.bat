echo %cd%
cd ./backend
start docker-compose up -d
cd ../frontend
start npm run start
pause