const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/quadrado', (req, res) => {
    console.log(req.body);
    res.json({
        dados: {
            area: req.body.valor*req.body.valor,
            perimetro: req.body.valor*4
        }
    });
});

app.listen(
    3000
);