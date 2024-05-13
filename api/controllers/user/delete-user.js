module.exports = {
    friendlyName: 'Delete user',
    description: 'Delete specific user from database.',
    inputs: {
        id: {
            type: 'number',
            required: true
        }
    },
    exits: {
        success: {
            description: 'User successfully deleted.'
        },
        notFound: {
            description: 'No user found with the provided id.'
        }
    },
    fn: async function (inputs, exits) {
        var deletedUser = await User.destroyOne({id: inputs.id});
        if(deletedUser) {
            return exits.success({message: 'User successfully deleted.'});
        }
        else {
            return exits.notFound({message: 'No user found with the provided id.'});
        }
    }
};