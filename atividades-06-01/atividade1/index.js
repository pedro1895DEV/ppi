const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Primeira tela</>");
    app.get('/teste',
        (req, res) => { res.send("<h1>Segunda tela</>")}
    )
})

app.listen(
    3000
);