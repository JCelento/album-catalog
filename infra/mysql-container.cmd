docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest
docker exec -it mysql bash
mysql -uroot -p
source ./music.sql;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';
exit;
