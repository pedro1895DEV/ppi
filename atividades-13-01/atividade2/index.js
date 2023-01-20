const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const pg = require("pg")
const app = express()

app.use(cors())
app.use(bodyParser.json())

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ppi',
    password: 'admin',
    port: 5432,
});

client.connect();

app.get("/livros", function (req, res) {
    client.query('SELECT * FROM livros')
        .then(
            function (ret) {
                let array = [];
                for (let livro of ret.rows) {
                    array.push({
                        nomeDoAutor: livro.autor,
                        titulo: livro.titulo
                    }
                    )
                }
                res.json({
                    resultados: array
                });
            }
        )
});

app.listen(
    3000
);