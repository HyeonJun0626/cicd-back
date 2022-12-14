const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());


// ========== PM2 무중단 관련 ==========
let isDisableKeepAlive = false
app.use(function(req, res, next) {
    if (isDisableKeepAlive) {
        res.set('Connection', 'close');
    }
    next();
});

app.get('/', (req, res, next) => {
    return res.status(200).send('hello 10');
});


app.listen(process.env.PORT, () => {
    process.send('ready');
    console.log(`Listening PORT ${process.env.PORT}\nJWT_SECRET ${process.env.JWT_SECRET}`);
});

// ========== PM2 무중단 관련 ==========
// SIGINT 받으면 이후 들어오는 요청 차단
process.on('SIGINT', function () {
    isDisableKeepAlive = true;
    app.close(function () {
        console.log('Server Closed');
        process.exit(0);
    });
})
