module.exports = {
    friendlyName: "Delete user",
    description: "Helper to delete a user from the database.",
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