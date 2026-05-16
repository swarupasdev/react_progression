USE campaign_db;
CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
email VARCHAR(50) UNIQUE,
password VARCHAR(100)
);

CREATE TABLE campaigns(
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100),
budget INT,
variant VARCHAR(50),
impressions INT DEFAULT 0,
clicks INT DEFAULT 0,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id)
);