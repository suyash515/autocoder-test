module.exports = {
    friendlyName: "get the list of users",
    description: "Returns the list of users based on search, sort, limit and skip parameters",
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
            if (inputs.populate.model_1) {
                promise.populate("model_1");
            }

            if (inputs.populate.model_2) {
                promise.populate("model_2");
            }
        }

        recordList = await promise.then();

        return exits.success(recordList);
    }
};