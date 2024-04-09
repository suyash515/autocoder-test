module.exports = {
    friendlyName: "Delete a user",
    description: "Delete user from the database using their unique id",
    inputs: {
        delete_criteria: {
            type: "ref",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        await User.destroy(inputs.delete_criteria);

        return exits.success();
    }
};