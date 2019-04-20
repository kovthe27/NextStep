'use strict';
const schema_TablaRanking = require('./registrar_ranking.model');


//Articulos
module.exports.registrar_ranking = (req, res) => {
    let utiles_nuevo = new schema_TablaRanking({
        cedula: req.body.cedula,
        anno: req.body.anno,
        tipo: req.body.tipo,
        calificacion: req.body.calificacion,
    });
    console.log(utiles_nuevo);

    utiles_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la ranking de utiles, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La ranking de utiles fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_ranking = function(req, res) {
    schema_TablaRanking.find().then(
        function (ranking) {
            res.send(ranking)
        });
};


module.exports.buscar_ranking = (req, res) =>{
    schema_TablaRanking.find(
        {_id :req.body.id_ranking}
    ) .then(
        function(ranking){
            res.send (ranking)
        }
    )
};

// Actualizar

module.exports.actualizar_ranking = function(req, res){
   
    schema_TablaRanking.findByIdAndUpdate(req.body.id_ranking, { $set: req.body },
        // schema_Tablaranking.findByIdAndUpdate(req.body.id_ranking, { $set:{descripcion:req.body.descripcion}},
        function (error, ranking){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la ranking de útiles'});
            }else{
                res.json({success: true , msg : 'La ranking de útiles se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminar_ranking = function(req, res){
    schema_TablaRanking.findByIdAndRemove(req.body.id_ranking,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la ranking de útiles'});
            }else{
                res.json({success: true ,msg: 'La ranking de útiles se eliminó con éxito'}); 
            }
        }
    )
};


