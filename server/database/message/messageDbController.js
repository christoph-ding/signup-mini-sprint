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
        res.send(500, err);
      } else {
        res.status(newMessage).send(newMessage.body)
      }
    });
  },
  getMessages: function(req, res, next) {
    console.log('...retrieving message...')
    Message.find({}, function (err, messages) {
      if (err) {
        res.send(500, err);
      } else {
        console.log(messages);
        res.send(messages);  
      }
    })
  }
};

