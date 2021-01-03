  var populate_state = function(state, new_data) {
    for (field in new_data) {
      if (new_data.hasOwnProperty(field)) {
        state[field] = new_data[field];
      }
    }
    state.initialized = true;
  }
