const fs  = require('fs')
var stats = {};

var individualParser = function(filename,cb){
  fs.readFile('./stats/e7e80f45-ea57-42d3-bddb-15ba7968bd6f.json',function(err,data){
    var json = JSON.parse(data.toString());
    var keys = Object.keys(json);
    for(let i in keys){
      let key = keys[i];

      let split = key.split('.');
      var o = stats;
      for(let j in split){
        let k = split[j];
        if(o[k]===undefined){
          o[k] = {};
        }
        o = o[k];
      }
      o = json[key];
      console.log(key,o);
    }
    // console.log(stats.stat.walkOneCm);
  });

}


individualParser();
