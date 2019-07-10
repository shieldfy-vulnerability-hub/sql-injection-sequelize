const express = require('express')
const app = express()
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'mariadb',
  port: '3306',
  dialect: 'mariadb',
});

app.get('/', (req, res) => {
    class Project extends Sequelize.Model {}

    Project.init({
        name: Sequelize.STRING,
        target: Sequelize.JSON,
    }, {
        sequelize,
        tableName: 'projects',
    });
    
    var payload = req.query.search;
    (async () => {
        await sequelize.sync();
        res.send(JSON.stringify(await Project.findAll({
            where: {target: {[payload]:1}},
            attributes: ['name'],
            raw: true,
          })));
    })();
})
app.listen(3000);