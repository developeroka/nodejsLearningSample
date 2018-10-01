const db = require('./db');

const categoriSchema = db.Schema({
    parentId: {
        type: db.Schema.Types.ObjectId,
        ref: "Category"
    },
    typeName: String,
});

const Category = db.model('Category', categoriSchema);

module.exports = Category;