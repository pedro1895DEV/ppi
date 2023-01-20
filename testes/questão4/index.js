const express = require('express');
const app = express();

app.get('/cursos/cbra'
    ,
    (req, res) =>{
        res.json(
            {
                "nome" : "Brasília",
                "base": "https://www.ifb.edu.br/brasilia",
                "cursos" : "https://www.ifb.edu.br/brasilia/cursos"
            }
        )
    }
),

app.get('/cursos/ccei'
    ,
    (req, res) =>{
        res.json(
            {
                "nome" : "Ceilândia",
                "base": "https://www.ifb.edu.br/campus-ceilandia",
                "cursos" : "https://www.ifb.edu.br/campus-ceilandia/cursos"
            }
        )
    }
),

app.get('/cursos/cest'
    ,
    (req, res) =>{
        res.json(
            {
                "nome" : "Estrutural",
                "base": "https://www.ifb.edu.br/campus-estrutural",
                "cursos" : "https://www.ifb.edu.br/campus-estrutural/cursos"
            }
        )
    }
),

app.get('/cursos/cgam'
    ,
    (req, res) =>{
        res.json(
            {
                "nome" : "Gama",
                "base": "https://www.ifb.edu.br/gama",
                "cursos" : "https://www.ifb.edu.br/gama/cursos"
            }
        )
    }
),
app.get('/cursos/cpla'
    ,
    (req, res) =>{
        res.json(
            {
                "nome" : "Planaltina",
                "base": "https://www.ifb.edu.br/planaltina",
                "cursos" : "https://www.ifb.edu.br/planaltina/cursos"
            }
        )
    }
),
app.get('/cursos/ctag'
    ,
    (req, res) =>{
        res.json(
            {
                "nome" : "Taguatinga",
                "base": "https://www.ifb.edu.br/taguatinga",
                "cursos" : "https://www.ifb.edu.br/taguatinga/cursos"
            }
        )
    }
)
app.listen(
    3000
);