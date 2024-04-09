/**
* User.js
* User Model
*/

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      description: 'The email address of the user',
      example: 'user@example.com'
    },
    name: {
      type: 'string',
      required: true,
      description: 'The full name of the user',
      maxLength: 120,
      example: 'John Doe'
    },
    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user's password'
    }
  }
};