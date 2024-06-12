/**
 * Department.js
 *
 * @description :: Model for Departments
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        location: {
            type: 'string'
        },
        description: {
            type: 'string'
        }
    }
};