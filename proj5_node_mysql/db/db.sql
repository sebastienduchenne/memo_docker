CREATE DATABASE IF NOT EXISTS db1 CHARACTER SET utf8;
CREATE USER 'toto'@'localhost' IDENTIFIED BY 'titi';
GRANT ALL PRIVILEGES ON db1.* TO 'toto'@'localhost';

#ALTER USER 'toto'@'localhost' IDENTIFIED WITH mysql_native_password BY 'titi';
#FLUSH PRIVILEGES;

USE db1;

CREATE TABLE IF NOT EXISTS articles (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    content TEXT NULL,
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO articles (title, author, content) VALUES
("title1", 'auteur1', "content1"),
("title2", 'auteur2', "content2")