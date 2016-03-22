$(document).ready(function() {
  $("#mmenu").mmenu({
    navbar: {
      title: "Меню"
    }
  }, {
     // configuration
     offCanvas: {
        pageNodetype: "section"
     }
  });

  var MMENUAPI = $('#mmenu').data('mmenu');

  $('#mmenu-toggle').click(function() {
		MMENUAPI.open();  	
  });
});