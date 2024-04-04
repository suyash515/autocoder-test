module.exports = {
    friendlyName: "Create a new user",
    description: "Insert a new user into the database.",
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