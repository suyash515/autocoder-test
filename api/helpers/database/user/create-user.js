module.exports = {
    friendlyName: "Create User",
    description: "Helper to create a new user",
    inputs: {
        params: {
            type: "ref",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        let recordAdded = await User.create(inputs.params).fetch();

        return exits.success(recordAdded);
    }
}