const User = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    createdAt: {
      type: 'ref',
      columnType: 'datetime',
      autoCreatedAt: true,
    },
  },
};

module.exports = User;