var Message = require('./messageDbModel');

module.exports = {
  saveMessage: function (req, res, next) {
    var message = req.body.message;
    console.log('message is      ', message)
    var newMessage = new Message({
      thingToSay: message
    });
    newMessage.save(function (err, newMessage) {
      if (err) {
        console.log('got to the db server for message')
        res.send(500, err);
      } else {
        res.status(newMessage).send(newMessage.body)
      }
    });
  }
};

