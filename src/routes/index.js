const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res, next) => {
    const users = await db.UserModel.findAll({
        order:[
            ['createdAt', 'DESC'],
        ]
    });
    res.json(users);
});

router.post('/', async (req, res, next) => {
    const data = req.body;
    const user = await db.UserModel.create(data);
    res.json(user);
})

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    const user = await db.UserModel.update(data, { where: { id } });
    res.json('si');

})

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    const user = await db.UserModel.destroy({ where: { id } });
    res.json('si');
})

router.use((req, res, next) => {
    res.status(404)
    res.json('404', { url: req.url });
});

module.exports = router;