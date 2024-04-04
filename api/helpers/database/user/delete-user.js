module.exports = {
    friendlyName: "Delete User helper",
    description: "This helper deletes a user from the database",
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