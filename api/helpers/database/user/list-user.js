module.exports = {
    friendlyName: "retrieve user list",
    description: "Helper to pull list of users based on criteria",
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
        let userPromise = User.find(inputs.search_criteria),
            userList = [];

        if (inputs.sort_criteria) {
            userPromise.sort(inputs.sort_criteria);
        }

        if (inputs.limit) {
            userPromise.limit(inputs.limit);
        }

        if (inputs.skip) {
            userPromise.skip(inputs.skip);
        }

        if (inputs.populate) {
            if (inputs.populate.relation_1) {
                userPromise.populate("relation_1");
            }

            if (inputs.populate.relation_2) {
                userPromise.populate("relation_2");
            }
        }

        userList = await userPromise.then();

        return exits.success(userList);
    }
};