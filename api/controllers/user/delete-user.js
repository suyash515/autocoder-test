module.exports = {
    friendlyName: "delete user",
    description: "Controller to delete a user.",
    inputs: {
        id: {
            type: 'number',
            required: true
        }
    },
    exits: {
        success: {
            description: 'User deleted.',
            responseType: 'success'
        },

        notFound: {
            description: 'No user with the specified ID was found in the database.',
            responseType: 'notFound'
        }
    },
    fn: async function ({id}) {
        const user = await User.destroy({id}).fetch();

        if (!user) {
            throw 'notFound';
        }

        return {message: 'Deleted user successfully.'};
    }
};