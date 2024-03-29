module.exports = {
    friendlyName: "Hash passwords using bcrypt-nodejs",
    description: "Hash passwords using bcrypt-nodejs",
    inputs: {
        password: {
            type: "string",
            example: "test",
            description: "Password that will be hashed",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        let bcrypt = require("bcrypt-nodejs"),
            hashedPassword = "";

        hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(inputs.password, null, null, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });

        return exits.success(hashedPassword);
    }
};