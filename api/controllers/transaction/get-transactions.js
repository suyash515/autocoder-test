module.exports = {
    friendlyName: "Get Transactions",
    description: "Retrieve a list of Ethereum transactions.",
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
            let transactions = await EthTransaction.find().sort("createdAt DESC");
            return exits.success({ transactions });
        } catch (error) {
            return exits.jsonError({ error: error.message });
        }
    }
}