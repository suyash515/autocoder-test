const bcrypt = require('bcrypt-nodejs');

module.exports = {
  create: async function (req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({ error: 'All fields are required' });
    }

    try {
      const hashedPassword = bcrypt.hashSync(password);

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword
      }).fetch();

      return res.status(201).send(newUser);
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return res.status(409).send({ error: 'Username or email already exists' });
      }
      return res.status(500).send({ error: 'An error occurred while creating the user' });
    }
  }
};