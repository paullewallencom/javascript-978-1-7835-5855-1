if (typeof localStorage === 'undefined' || localStorage === null) {      
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage(__dirname + '/localStorage',
    Infinity);
}
