
var mcparser = require('./mcparser.js');
var stats = {};
mcparser('./stats/xxxx.json',function(result){
  console.log(result);
});
