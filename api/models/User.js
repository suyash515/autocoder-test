/**
 * User.js
 * User
 */

module.exports = {
    attributes: {
        email: {
            type: 'string',
            required: true
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
    beforeCreate: function (values, next) {
        // Add code to hash password
    },
    beforeUpdate: function (values, next) {
        // Add code to hash password if it is updated
    }
};