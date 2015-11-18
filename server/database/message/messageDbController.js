var Message = require('/messageDbModel');

module.exports = {
  saveMessage: function (req, res, next) {
    var message = req.body.message;
    var newMessage = new Message({
      thingToSay = message;
    });
    newMessage.save(function (err, newMessage) {
      if (err) {
        res.send(500, err);
      } else {
        res.send(200, newMessage).
      }
    });
  };
};

