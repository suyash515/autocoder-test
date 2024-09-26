module.exports = {
    friendlyName: "Create user",
    description: "Helper for creating user.",
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