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

client.query('SELECT * FROM livros')
    .then(
        function (ret) {
            for (linha of ret.rows) {
                console.log("Título:", linha.titulo);
                console.log("Autor:", linha.autor);
                console.log("Número de páginas:", linha.npags);
                console.log();
            }
        }
    );
