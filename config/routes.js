module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /user/create': 'UserController.create'
};