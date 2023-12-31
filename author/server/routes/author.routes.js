const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/new', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id',AuthorController.deleteAuthor);
}