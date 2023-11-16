const express = require('express');
var router = express.Router();
const Article = require('../models/article');

//liste de scategorie
router.get('/', async (req, res) => {
    try {
        const art = await Article.find().populate("scategorieID");
        return res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//create new article
router.post('/', async (req, res) => {
    const newArt = new Article(req.body)
    try {
        await newArt.save();
        res.status(200).json(newArt);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

//search for article
router.get('/:articleID', async (req, res) => {
    try {
        const art = await Article.findById(req.params.articleID);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//modify article
router.put('/:articeID', async (req, res) => {
    try {
        const art1 = await Article.findByIdAndUpdate(
            req.params.articeID, { $set: req.body },
            { new: true }
        );
        res.status(200).json(art1)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

//delete sous categorie
router.delete('/:articleID', async (req, res) => {
    try {
        const id = req.params.articleID;
        await Article.findByIdAndDelete(id);
        res.status(200).json({ message: "item deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

module.exports = router;