var messageDbController = require('./messageDbController.js');

module.exports = function (app) {
  app.post('/', messageDbController.saveMessage);
  app.get('/', messageDbController.getMessages);  
}
