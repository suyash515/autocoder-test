module.exports = {
    friendlyName: 'Delete User',
    description: 'Controller to delete a user.',

    inputs: {
        id: {
            type: 'number',
            required: true
        }
    },

    exits: {
        success: {
            description: 'User deleted successfully.'
        },
        notFound: {
            description: 'User not found.'
            responseType: 'notFound'
        }
    },

    fn: async function(inputs, exits) {
        let user = await User.destroy({id: inputs.id}).fetch();

        if(user) {
            return exits.success({
                message: 'User deleted successfully.',
                data: user
            });
        } else {
            return exits.notFound({
                message: 'User not found.'
            });
        }
    }
};