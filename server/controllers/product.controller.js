
const Product = require("../models/product.model");

module.exports.get_all = (req, res) => {
    Product.find().sort({nombre: 1})
        .then(products => res.json(products))
        .catch( err =>{
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create_product = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.get_product = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports.update_product = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_product = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}