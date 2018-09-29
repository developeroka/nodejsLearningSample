const db = require('./db');

const categoriSchema = db.Schema({
    typeName: String,
});

const Category = db.model('Category', categoriSchema);

module.exports = Category;