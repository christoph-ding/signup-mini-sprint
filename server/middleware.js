var bodyParser = require('body-parser');

module.exports = function(app, express) {
  var messageRouter = express.Router();

  // router for messaging
  app.use('/api/sendMsg', messageRouter);

}
