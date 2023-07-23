const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllAuthor = (req, res) => {
    Author.find({})
        .then(Authors => {
            console.log(Authors);
            res.json(Authors);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(Author => res.json(Author))
        .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deleteConfrimation => res.json(deleteConfrimation))
        .catch(err => res.json(err))
}