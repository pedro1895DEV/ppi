const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/", function(req, res){
    res.send('<img id="imagem" src="https://cdn.esports.gg/wp-content/uploads/2021/11/13154000/Heimerdinger2.png" style="width:350px">');
    app.get('/pedro',
        (req, res) => { res.send('<img id="imagem" src="https://www.legendsbr.com/wp-content/uploads//2013/05/Heimerdinger_Splash_3.jpg" style="width:350px">')}
    )
})

app.listen(
    3000
);

function func1 (){
$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/',
    success: function(res) {
        $('#primeiro').html(res);
    }
   });
}

function func2 (){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/pedro',
        success: function(res) {
            $('#primeiro').html(res);
        }
       });
    }