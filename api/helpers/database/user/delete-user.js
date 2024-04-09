module.exports = {
    friendlyName: "Delete User",
    description: "Helper that deletes user from the database",
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
}