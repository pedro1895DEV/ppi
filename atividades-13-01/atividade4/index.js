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
})

client.connect();

app.get("/livro/:id", (req, res) => {
    client.query({
        text: `select * from livros where id_livro = $1`,
        values: [req.params.id]
    })
    .then((ret) => {
        res.json({
            sucesso: true,
            resultado: ret.rows[0]
        })
    })
})

app.listen(3000)