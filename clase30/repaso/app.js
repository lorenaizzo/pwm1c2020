var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded());

app.engine('hbs', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.post('/posteo', function(req, res) {
    // 2 tipos de validaciones:
    // 1 validacion: ver que me manden las variables
    if(!req.body.nombre || !req.body.estado || !req.body.post){
        res.sendStatus(412);
    }

    // 2 validacion: cumple con la logica del negocio
    if(req.body.nombre == '' || req.body.estado == '' || req.body.post == ''){
        res.sendStatus(412);
    }

    var nombre = req.body.nombre;
    var estado = req.body.estado;
    var post = req.body.post;

    res.render('agradecimiento', {nombre, post, estado});

});


app.get('/posteo', function(req, res){

    var posteos = [{
            nombre: "Lorena",
            estado: "contenta",
            post: "tengo cafetera nueva!"
        },
        {
            nombre: "Pilar", 
            estado: "triste",
            post: "no puedo entrenar"
        },
        {
            nombre: "Juan Manuel",
            estado: "pensativo",
            post: "quiero abandonar el tenis"
        },
        {
            nombre: "Clark",
            estado: "dudoso",
            post: "No se si descubrieron mi otra identidad"
        },
        {
            nombre: "Loan",
            estado: "furioso",
            post: "mi hermano me traiciono"
        }
    ];

    var error = 'Error en aplicacion';
    res.render('listadoPosteos', {posteos, error});

});


// GET POST DELETE PUT
app.get('/persona', function(req, res) {
    res.send("Hola");
});



app.listen(3000, function(){
    console.log("Servidor escuchando en el puerto 3000");
});