/**
 * User.js
 *
 * @description :: Model for Users
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        department: {
            model: 'Department'
        },
        role: {
            type: 'string'
        }
    }
};