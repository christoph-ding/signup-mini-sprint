var messageDbController = require('/messageDbController.js');

module.exports = function(app) {
  app.post('/api/sendMsg', messageDbController.saveMessage);
}
