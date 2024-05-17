module.exports = {
    list: async function (req, res) {
        try {
            const blocks = await Block.find();
            return res.json(blocks);
        } catch (error) {
            return res.serverError(error);
        }
    }
};