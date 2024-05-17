module.exports = {
    friendlyName: "Get list of blocks",
    description: "Retrieve a list of all blocks from the database",
    inputs: {},
    exits: {
        jsonError: {
            responseType: "jsonError"
        },
        success: {
            responseType: "jsonOk"
        }
    },
    fn: async function(inputs, exits) {
        try {
            let blocks = await Block.find(); // Assuming 'Block' is the model for blocks
            return exits.success({
                blocks: blocks
            });
        } catch (error) {
            return exits.jsonError({
                message: 'Error retrieving blocks',
                error: error.message
            });
        }
    }
};