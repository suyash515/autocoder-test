module.exports = {
    friendlyName: "create user",
    description: "Creates a new user.",
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

        const newUser = await User.create({
            email: inputs.email,
            name: inputs.name,
            password: inputs.password
        }).fetch();

        return exits.success(newUser);
    }
};