module.exports = {
    friendlyName: "Create a new user",
    description: "Helper that handles creating a new user in the database.",
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