const mongoose = require('mongoose');

var db = mongoose.connect("mongodb://test:test123@ds261626.mlab.com:61626/drhealthcart");
mongoose.connection.once('open',()=>{console.log();console.log('-- Connected to Dr. Healthcart Database--');console.log();}).on('error',(error)=>{console.log('continue error = ', error);});
