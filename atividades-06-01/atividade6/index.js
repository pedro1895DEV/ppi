const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/temp/:fahr'
    ,
    (req, res) => {
        res.json({
            "fahrenheit" : (req.params.fahr)*1,
            "celsius" : (req.params.fahr - 32) * 5 / 9,
            "kelvin" : (req.params.fahr - 32) * 5 / 9 +273.15
        }
        );
    }
);

app.listen(
    3000
);

function consultar(){
    let numero = $('#valor').val();
    $.ajax({
        type : 'GET',
        url : `http://localhost:3000/temp/${numero}`,
        success : function (res) {
            $('#fahr').html(`Valor em Fahrenheit: ${res.fahrenheit}`),
            $('#cel').html(`Valor em Celsius: ${res.celsius}`),
            $('#kelv').html(`Valor em Kelvin: ${res.kelvin}`)
        }
    })
}