var save = function(userid, identifier, value) {
  localStorage.setItem(sanitize(userid) + ':' + sanitize(identifier), value);
  return true;
}

var restore = function(userid, identifier) {
  var value = localStorage.getItem(sanitize(userid) + ':' +
sanitize(identifier));
  if (value) {
    return value;
  } else {
    return 'undefined';
  }
}
