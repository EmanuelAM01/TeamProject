const mongoose = require("mongoose");

const EsquemaAutor = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    },
    description: {
        type: String
    },
    cost: {
        type: Number,
        required: [true, "Cost is required"]
    },
    quantity: {
        type: Number,
        required :[true, "Quantity is required"]
    }
}, {timestamps: true, versionKey:false})
//timestamps: true es para createdAt y updatedAt
//versionKey: false es para eliminar un campo _v

const Autor = mongoose.model("autores", EsquemaAutor);
module.exports = Autor;