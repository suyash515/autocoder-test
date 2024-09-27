module.exports = {
    friendlyName: "Create User",
    description: "Helper to create a new user in the user table",
    inputs: {
        params: {
            type: "ref",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        let recordsAdded = await User.create(inputs.params).fetch();

        return exits.success(recordsAdded);
    }
}