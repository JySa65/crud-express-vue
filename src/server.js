const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./models');
const route = require('./routes');
const cors = require('cors');

// Middlewares
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.get("/", (req, res) => {
    res.sendFile(__dirname, './public/index.html');
})
app.use('/api/users', route);

// Export Static..
const DIR_STATIC = path.resolve(__dirname, './public')
app.use('static', express.static(DIR_STATIC));
app.use(express.static(DIR_STATIC));

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000;
app.set('port', PORT);
db.sequelize.sync().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
});