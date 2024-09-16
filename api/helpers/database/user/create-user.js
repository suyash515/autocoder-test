module.exports = {
    friendlyName: "Create user helper",
    description: "Helper to create a new user",
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
};