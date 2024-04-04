module.exports = {
    friendlyName: "create a user",
    description: "Helper to create a user.",
    inputs: {
        email: {
            type: "string",
            required: true
        },
        name: {
            type: "string",
            required: true
        },
        password: {
            type: "string",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        // define User model here and create a new user
        // Return with exits.success(newUserDetail)
    }
};