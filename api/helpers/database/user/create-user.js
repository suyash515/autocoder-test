module.exports = {
    friendlyName: "Create a new user in the database",
    description: "Helper responsible for adding user data into the User model",
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