docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest
pause
docker exec -it mysql bash
pause
mysql -uroot -p
pause
source ./music.sql;
pause
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';
exit;
pause