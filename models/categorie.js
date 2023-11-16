const mongoose = require("mongoose")

//create schematic (class) for categorie

const categorieSchema = mongoose.Schema({
    nomcategorie: { type: String, required: true, unique: true },
    imagecategorie: { type: String, required: false }
})

//exporting module
module.exports = mongoose.model('categorie', categorieSchema)