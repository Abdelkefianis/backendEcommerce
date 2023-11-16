const express = require('express');
var router = express.Router();
const Scategorie = require('../models/scategorie');

//liste de scategorie
router.get('/', async (req, res) => {
    try {
        const scat = await Scategorie.find().populate("categorieID");
        return res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//create neww scategorie
router.post('/', async (req, res) => {
    const newScat = new Scategorie(req.body)
    try {
        await newScat.save();
        res.status(200).json(newScat);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

//search for scategorie
router.get('/:scategorieID', async (req, res) => {
    try {
        const scat = await Scategorie.findById(req.params.scategorieID);
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//modify sous categorie
router.put('/:scategorieID', async (req, res) => {
    try {
        const scat1 = await Scategorie.findByIdAndUpdate(
            req.params.scategorieID, { $set: req.body },
            { new: true }
        );
        res.status(200).json(scat1)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

//delete sous categorie
router.delete('/:scategorieID', async (req, res) => {
    try {
        const id = req.params.scategorieID;
        await Scategorie.findByIdAndDelete(id);
        res.status(200).json({ message: "item deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

module.exports = router;