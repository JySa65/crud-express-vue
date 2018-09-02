const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    db.UserModel.findAll({
        order:[
            ['createdAt', 'DESC'],
        ]
    })
    .then(users => {
        console.log(`Method get: ${users}`)
        res.json(users);
    })
    .catch(error => {
        console.log(`Error en get user: ${error}`)
    })
});

router.post('/', async (req, res, next) => {
    const data = req.body;
    db.UserModel.create(data)
    .then(user => {
        console.log(`Method Post: ${user}`)
        res.json(user);
    })
    .catch(error => {
        console.log(`Error en post user: ${error}`)
    })
})

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    await db.UserModel.update(data, { where: { id } })
    .then(data => {
        res.json('si');
        console.log(`Method put ${data}`)
    })
    .catch(error => {
        console.log(`Error en put user: ${error}`)
    })
    
})

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    await db.UserModel.destroy({ where: { id } })
    .then(data => {
        res.json('si');
        console.log(`Method delete ${data}`)
    })
    .catch(error => {
        console.log(`Error en delete user: ${error}`)
    })
})

router.use((req, res, next) => {
    res.status(404)
    res.json('404', { url: req.url });
});

module.exports = router;