  jQuery('#logout').click(function() {
    if (Modernizr.localstorage) {
      localStorage.removeItem('Calendar');
      localStorage.removeItem('Todo');
      localStorage.removeItem('Scratch');
    }
  });
