const db = require('./db');

const headerMenuSchema = db.Schema({
    parentMenuId:{
        type: db.Schema.Types.ObjectId,
        ref: "HeaderMenu"
    },
    menuName:String
});

const HeaderMenu = db.model('HeaderMenu', headerMenuSchema);

module.exports = HeaderMenu;