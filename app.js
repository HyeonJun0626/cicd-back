const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());


app.get('/', (req, res, next) => {
    return res.status(200).send('hello 1');
});


app.listen(process.env.PORT, () => {
    console.log('========== START ==========');
    console.log(`listening port ${process.env.PORT}\nJWT_SECRET ${process.env.JWT_SECRET}`);
    console.log('========== END ==========1');
});
