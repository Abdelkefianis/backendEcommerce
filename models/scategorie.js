//importing modules
const mongoose = require("mongoose")
const Categorie = require("./categorie.js");

//create schematic (class) for scategorie
const scategorieSchema = mongoose.Schema({
    nomscategorie: { type: String, required: true },
    imagescat: { type: String, required: false },
    categorieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Categorie
    }
})

//exporting module
module.exports = mongoose.model('scategorie', scategorieSchema)