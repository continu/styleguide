module.exports = function(app) {
  var routes = require('./routes/index');

  app.get('/', routes.index);
};