module.exports = {
    attributes: {
        blockNumber: {
            type: 'number',
            required: true
        },
        previousHash: {
            type: 'string',
            required: true
        },
        hash: {
            type: 'string',
            required: true
        },
        timestamp: {
            type: 'number',
            required: true
        }
        // Add more attributes as required
    }
};