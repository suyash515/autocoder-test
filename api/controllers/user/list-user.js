module.exports = {
    friendlyName: "List User",
    description: "Controller for fetching user details",
    inputs: {},
    exits: {
        success: {
            description: 'All available users returned.',
            responseType: 'ok'
        },
        notFound: {
            description: 'No users found in the database.',
            responseType: 'notFound'
        },
    },
    fn: async function (inputs, exits) {
        let users = await User.find();

        if (users.length === 0) {
            return exits.notFound();
        }

        return exits.success(users);
    }
};