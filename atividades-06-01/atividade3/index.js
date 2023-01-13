const express = require('express');
const app = express();

app.get('/',
    function (req, res) {
        res.send(
            req.headers['user-agent']
        )
    }
)

app.listen(
    3000
);