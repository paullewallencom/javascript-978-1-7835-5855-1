var restore = function(identifier, default_value, state, callback) {
    populate_state(state, default_value);
    state.initialized = false;
    var complete = function(jqxhr) {
      if (jqxhr.responseText === 'undefined' || jqxhr.responseText.length &&
        jqxhr.responseText[0] === '<') {
        // Do nothing for now.
      } else {
        populate_state(state, JSON.parse(jqxhr.responseText));
      }
      callback();
      state.initialized = true;
    }
    jQuery.ajax('/restore', {
      'complete': complete,
      'data': {
        'identifier': identifier,
        'userid': userid
      },
      'method': 'POST',
    });
    if (Modernizr.localstorage) {
      if (localStorage[identifier] === null || localStorage[identifier]
        === undefined) {
        return default_value;
      } else {
        return JSON.parse(localStorage[identifier]);
      }
    } else {
      return default_value;
    }
  }
