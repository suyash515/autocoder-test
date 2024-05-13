module.exports = {
    friendlyName: "delete user",
    description: "Helper to delete a user.",
    inputs: {
        userId: {
            type: "number",
            required: true
        }
    },
    exits: {
        success: {
            description: "User deleted successfully."
        },
        notFound: {
            description: "User not found."
        }
    },
    fn: async function(inputs, exits) {
        var user = await User.findOne({id:inputs.userId});
        if (!user) {
            return exits.notFound();
        }
        await User.destroy({id:inputs.userId});
        return exits.success();
    }
};