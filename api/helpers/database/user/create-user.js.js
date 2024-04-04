module.exports = {
    friendlyName: 'Create a new user in the database',
    description: 'Helper to create a new user in the database using the provided details.',
    inputs: {
        params: {
            type: 'ref',
            required: true
        }
    },

    fn: async function(inputs, exits) {
        let recordsAdded = await User.create(inputs.params).fetch();
        return exits.success(recordsAdded);
    }
};