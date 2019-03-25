// 'use strict';
// const mongoose = require('mongoose');
// const mongooseFindAndFilter = require('mongoose-find-and-filter');
 
// mongoose.plugin(mongooseFindAndFilter);

// const model_acercaNosotros = require('./registrar_acercaNosotros.model');

// let query = { ubicacion: { $gte: 1 } };
// let queryParams = req.query;

// let populate = [{
//     path: 'registrar_acercaNosotros',
//     model: 'registrar_acercaNosotros',
//   },
//   { path: 'registrar_acercaNosotros', model: 'registrar_acercaNosotros' }
// ];


// model_acercaNosotros
//   .findAndFilter(query, queryParams, populate)
//   .then((acercaNosotros_nuevo) => {
//     res.status(200).json(acercaNosotros_nuevo);
//   })
//   .catch((err) => {
//     return next(err);
//   });


 