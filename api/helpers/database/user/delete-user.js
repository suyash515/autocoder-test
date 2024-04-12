module.exports = {
    friendlyName: 'Delete User',
    description: 'Helper to delete a user.',

    inputs: {
        id: {
            type: 'number',
            required: true
        }
    },

    fn: async function(inputs, exits) {
        await User.destroy({id: inputs.id});
        return exits.success();
    }
};