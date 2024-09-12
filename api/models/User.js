/**
 * User.js
 * User
 */

module.exports = {

    attributes: {

        email: {
            type: 'string',
            required: true,
            unique: true
        },

        name: {
            type: 'string',
            required: true
        },

        password: {
            type: 'string',
            required: true
        }
    },

    // use bcrypt to hash password before storing
    beforeCreate(values, next) {
        var bcrypt = require('bcryptjs');
        bcrypt.genSalt(10, function(err, salt) {
            if(err) return next(err);
            bcrypt.hash(values.password, salt, function(err, hash) {
                if(err) return next(err);
                values.password = hash;
                next();
            });
         });
    }
};