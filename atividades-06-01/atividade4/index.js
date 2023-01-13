const express = require('express');
const app = express();

app.get('/temp/:fahr'
    ,
    (req, res) => {
        res.send(
            `A temperatura em celsius é de: <strong>${(req.params.fahr - 32) * 5 / 9} °C</strong>`
        );
    }
);

app.listen(
    3000
);