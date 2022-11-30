const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/', (req, res, next) => {
    return res.status(200).send('hello 1');
});


app.listen(8040, () => {
    console.log(`listening port ${8040}`);
});
