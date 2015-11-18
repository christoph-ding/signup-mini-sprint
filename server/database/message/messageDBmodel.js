var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  thingToSay: { type: String }
}); 

var Message = mongoose.model('Message', messageSchema);

messageSchema.pre('save', function (next) {
  next();
});

module.exports = Message;
