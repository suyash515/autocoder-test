module.exports = {
    friendlyName: 'Create user',
    description: 'Helper to create a new user.',
    inputs: {
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
    fn: async function(inputs, exits) {
        // create new user using the inputs
        // then return the newly created user data
        return exits.success(newUser);
    }
};