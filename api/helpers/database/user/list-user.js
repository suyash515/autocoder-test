module.exports = {
    friendlyName: "List User",
    description: "Helper that fetches user data from the database",
    inputs: {
        search_criteria: {
            type: "ref",
            required: true
        },
        sort_criteria: {
            type: "ref",
            required: false
        },
        limit: {
            type: "number",
            required: false
        },
        skip: {
            type: "number",
            required: false
        },
        populate: {
            type: "ref",
            required: false
        }
    },
    fn: async function(inputs, exits) {
        let promise = User.find(inputs.search_criteria),
            recordList = [];
        if(inputs.sort_criteria) {
            promise.sort(inputs.sort_criteria);
        }
        if(inputs.limit) {
            promise.limit(inputs.limit);
        }
        if(inputs.skip) {
            promise.skip(inputs.skip);
        }
        recordList = await promise;
        return exits.success(recordList);
    }
};