module.exports = {
    friendlyName: "Create User Helper",
    description: "This helper inserts new user records in the User model",
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