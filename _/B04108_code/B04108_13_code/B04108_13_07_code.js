  var save = function(identifier, data) {
    if (Modernizr.localstorage) {
      localStorage[identifier] = JSON.stringify(data);
    }
    jQuery.ajax('/save', {
      'data': {
        'data': JSON.stringify(data),
        'identifier': identifier,
        'userid': userid
      },
      'method': 'POST'
    });
  }
