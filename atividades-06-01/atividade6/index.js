const express = require('express');
const app = express();

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
    $.ajax({
        type : 'GET',
        url : 'https://localhost:3000',
        success : function (dados) {
            $("resultado").html(dados)
        },
        dataType : 'json'
    })
}