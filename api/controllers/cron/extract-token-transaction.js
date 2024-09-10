module.exports = {
    friendlyName: "Scans transactions in database and extract token transactions",
    description: "Scans transactions in database and extract token transactions",
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
        await sails.helpers.token.parseTokenTransaction();

        const InputDataDecoder = require("ethereum-input-data-decoder");
        var decoder = null,
            result = null,
            tokenTransaction = {
                token: null,
                token_address: inputs.token.address,
                transaction: inputs.transaction.id,
                transactionName: "",
                fromAddress: inputs.transaction.from,
                fromAddress_lower: inputs.transaction.from.toLowerCase(),
                toAddress: "",
                amountTokens: 0,
                amountTokens_absolute: 0,
                transaction_hash: inputs.transaction.hash,
                block_number: inputs.transaction.blockNumber,
                block_timestamp: inputs.transaction.block_timestamp
            };

        if (inputs.token.token_type == Token.constants.token_type.erc20) {
            decoder = new InputDataDecoder(sails.config.smart_contract_config.abi.token.erc20)
        }

        if (decoder) {
            result = decoder.decodeData(inputs.transaction.input);

            if (result && result.method) {
                tokenTransaction.transactionName = result.method;
            }

            if (tokenTransaction.transactionName == TokenTransaction.constants.transactionName.transfer) {
                tokenTransaction.toAddress = "0x" + result.inputs[0];
                tokenTransaction.toAddress_lower = "0x" + result.inputs[0].toLowerCase();
                tokenTransaction.amountTokens = parseFloat(result.inputs[1]);

                tokenTransaction.amountTokens_absolute = parseFloat(tokenTransaction.amountTokens / (Math.pow(10, inputs.token.decimals)));
            }
        }

        tokenTransaction.token = inputs.token.id;

        return exits.success({
            message: "extract-token-transaction completed"
        });
    }
}