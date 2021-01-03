    getInitialState: function() {
      default_value = {
        entries: [],
        entry_being_added: this.new_entry()
        };
      restore('Calendar', default_value,
        default_value, function() {
        jQuery('#submit-calendar').prop('disabled', false);
      });
