module.exports = {
    friendlyName: "List user data",
    description: "Helper to get list of user data from the User model",
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
        if (inputs.sort_criteria) {
            promise.sort(inputs.sort_criteria);
        }
        if (inputs.limit) {
            promise.limit(inputs.limit);
        }
        if (inputs.skip) {
            promise.skip(inputs.skip);
        }
        if (inputs.populate) {
            // example populate models
            if (inputs.populate.someModel) {
                promise.populate("someModel");
            }
        }
        recordList = await promise.then();
        return exits.success(recordList);
    }
}