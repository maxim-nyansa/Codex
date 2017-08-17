var mongoose = require('mongoose');
const URL = "mongodb://codex:codex@ds143980.mlab.com:43980/codex";
mongoose.connect(URL,function (error) {
  if (error) {
    console.log(error);
  }else{
    console.log("Hei there... we are connected");
  }
});

module.exports = mongoose;
