DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

USE shop;

DROP TABLE IF EXISTS list;

CREATE TABLE list (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  descr VARCHAR(30) NOT NULL
);


INSERT INTO list (id,quantity,descr) VALUES
('0', '5','frozen pizza'),
('0','10','greek yogurt'),
('0','2','wine'),
('0','1','iced coffee');