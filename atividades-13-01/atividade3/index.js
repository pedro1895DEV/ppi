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

app.get('/livros/:id', function (req, res) {
    client.query(
        {
            text: 'SELECT * FROM livros WHERE id = $1',
            values: [req.params.id]
        }
    )


        .then(
            function (ret) {
                let livro = ret.rows[0];
                res.json(
                    {
                        autor: livro.autor,
                        titulo: livro.titulo,
                        numeroDePaginas: livro.npags
                    }
                );
            }
        )
});

app.listen(
    3000
)