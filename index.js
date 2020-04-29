require ("dotenv").config();
const express = require('express'),
    massive = require('massive'),
    app = express(),
    ctrl = require('./products_controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
}).catch(err => console.log(err));

app.listen(SERVER_PORT, () => {
    console.log(`RUNNING ON ${SERVER_PORT}`)});


// Products Endpoints

app.get(`/api/products`, ctrl.getAll);
app.get(`/api/products/:id`, ctrl.getOne);
app.put(`/api/products/:id`, ctrl.update);
app.post(`/api/products`, ctrl.create);
app.delete(`/api/products/:id`, ctrl.delete)


