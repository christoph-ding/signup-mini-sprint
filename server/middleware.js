var bodyParser = require('body-parser');

module.exports = function(app, express) {
  // app === userRouter injected from middlware.js
  var messageRouter = express.Router();

  // router for messaging
  app.use('/api/Msg', bodyParser.json(), messageRouter);

  // inject our routers into their respective route files
  require('./database/message/messageDbRouter.js')(messageRouter);
};

