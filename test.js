module.exports = {
    friendlyName: "Read content of a file",
    description: "Read content of a file",
    inputs: {
        file_path: {
            type: "string",
            example: "/project-folder/api/controllers/file-1.js",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        const fs = require("fs");

        let filePath = inputs.file_path;

        try {
            fs.readFile(filePath, "utf8", async (err, fileContent) => {
                if (err) {
                    return exits.success({
                        success: false
                    });
                } else {
                    return exits.success({
                        success: true,
                        data: fileContent
                    });
                }
            });
        } catch (e) {
            sails.log.debug(e);//debug

            return exits.success({
                success: false
            });
        }
    }
};