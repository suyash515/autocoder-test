 
/**
 * User.js
 * User credentials Model
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
    }
};