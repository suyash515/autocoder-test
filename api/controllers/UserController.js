module.exports = {
  create: async function (req, res) {
    try {
      const { name, email } = req.body;
      if (!name || !email) {
        return res.badRequest({ error: 'Name and email are required' });
      }
      const newUser = await User.create({ name, email }).fetch();
      return res.ok(newUser);
    } catch (err) {
      return res.serverError(err);
    }
  },
 
  update: async function (req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      if (!id) {
        return res.badRequest({ error: 'User ID is required' });
      }
      const updatedUser = await User.updateOne({ id }).set({ name, email });
      if (!updatedUser) {
        return res.notFound({ error: 'User not found' });
      }
      return res.ok(updatedUser);
    } catch (err) {
      return res.serverError(err);
    }
  }
};