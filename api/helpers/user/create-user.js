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
        // define variables here
        const user = await User.create(inputs).fetch();
        // always have a return statement
        return exits.success(user);
    }
};