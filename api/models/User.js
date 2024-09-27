/**
 * User.js
 * User
 */

module.exports = {
    attributes: {
        email: {
            type: "string",
            required: true,
            unique: true
        },
        name: {
            type: "string",
            required: true
        },
        password: {
            type: "string",
            required: true
        }
    }
};