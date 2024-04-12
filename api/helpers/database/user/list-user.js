module.exports = {
    friendlyName: "List users from a database",
    description: "Helper to fetch users from the database based on search criteria",
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
            if (inputs.populate.roles) {
                promise.populate("roles");
            }
        }
        recordList = await promise.then();
        return exits.success(recordList);
    }
};