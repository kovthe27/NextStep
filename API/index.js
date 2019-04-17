'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
    // dburl = 'mongodb://pabskun:1pabskun9@proyecto-shard-00-00-ev3z1.mongodb.net:27017,proyecto-shard-00-01-ev3z1.mongodb.net:27017,proyecto-shard-00-02-ev3z1.mongodb.net:27017/cocoa?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true', //usando mongoDb Atlas,
    //dburl = 'mongodb://pabs:1biblioteca9@ds163680.mlab.com:63680/bd_biblioteca' //usando mlab,
    dburl = 'mongodb://next_step:specta123@cluster0-shard-00-00-qldqx.mongodb.net:27017,cluster0-shard-00-01-qldqx.mongodb.net:27017,cluster0-shard-00-02-qldqx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', 
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


const servicio = require('./componentes/registrar_servicio/registrar_servicio.route');
app.use('/api', servicio);

const noticia = require('./componentes/registrar_noticia/registrar_noticia.route');
app.use('/api', noticia);

const infoMatricula = require('./componentes/registrar_infoMatricula/registrar_infoMatricula.route');
app.use('/api', infoMatricula);

const acercaNosotros = require('./componentes/registrar_acercaNosotros/registrar_acercaNosotros.route');
app.use('/api', acercaNosotros);

const cita = require('./componentes/registrar_cita/registrar_cita.route');
app.use('/api', cita);

const boletin = require('./componentes/registrar_boletin/registrar_boletin.route');
app.use('/api', boletin);

const etiquetasCentro = require('./componentes/registrar_etiquetasCentro/registrar_etiquetasCentro.route');
app.use('/api', etiquetasCentro);

const comentarios = require('./componentes/registrar_comentarios/registrar_comentarios.route');
app.use('/api', comentarios);




const preguntasAdmin = require('./componentes/registrar_preguntas_admin/registrar_preguntas.route');
const utilesAdmin = require('./componentes/registrar_utiles_admin/registrar_utiles.route');
const registroPadreFamilia = require('./componentes/registrar_usuario/registrar_usuario.route');
const listasUtiles = require('./componentes/registrar_listas_utiles/registrar_utiles_lista.route');
const listaTipos = require ('./componentes/registrar_articulos/registrar_articulos.route');
const bitacora = require ('./componentes/registrar_bitacora/registrar_bitacora.route');
const etiqueta = require ('./componentes/registrar_etiquetas/registrar_etiquetas.route');
const registroCentroEducativo = require('./componentes/registrar_centroEducativo/registrar_centro.route');
const registroContacto = require('./componentes/registrar_contacto/registrar_contacto.route');
const listaFavorito = require('./componentes/registrar_favortios/registrar_favoritos.route');
const listaFormularios = require('./componentes/registrar_formularios/registrarFormularios_route');
const listaCalificaciones = require('./componentes/registrar_calificaciones/registrar_calificaciones.route');

app.use('/api', listaCalificaciones);
app.use('/api', listaFormularios);
app.use('/api', servicio);
app.use('/api', preguntasAdmin);
app.use('/api', utilesAdmin);
app.use('/api', registroPadreFamilia);
app.use('/api', registroCentroEducativo);
app.use('/api', registroContacto);

app.use('/api', listasUtiles);
app.use('/api', listaTipos);
app.use('/api', bitacora);
app.use('/api', etiqueta);
app.use('/api', listaFavorito);

// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};