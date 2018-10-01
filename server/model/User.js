const db = require('./db');

const userSchema = db.Schema({

        userFname:  {
            type: String,
            required: true 
        },
        userLname:  {
            type: String,
            required: true 
        },
        userEmail:  {
            type: String,
            required: true 
        },
        userPassword:  {
            type: String,
            required: true 
        }
});

const User = db.model('User', userSchema);

module.exports = User;