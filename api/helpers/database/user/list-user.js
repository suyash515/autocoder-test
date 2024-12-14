module.exports = {
    friendlyName: "List User",
    description: "Helper for fetching user details",
    inputs: {
        email: {
            type: 'string',
            required: true
        }
    },

    fn: async function (inputs, exits) {
        const { email } = inputs;
        const user = await User.findOne({email: email});
        return exits.success(user);
    }
};