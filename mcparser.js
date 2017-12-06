module.exports = function(filename,cb){
  var assign = function(storage,keys,value){
    if(keys.length === 1){
      storage[keys] = value;
      return;
    }
    let k = keys.shift();
    assign(storage[k]={},keys,value);
  };

  require('fs').readFile(filename,function(err,data){
    var json = JSON.parse(data.toString());
    var keys = Object.keys(json);
    var stats = {};
    for(let i in keys){
      let key = keys[i];
      let value = json[key];
      assign(stats,key.split('.'),value);
    }
    if( typeof(cb) === 'function'){
      return cb(stats);
    }
  });

};
