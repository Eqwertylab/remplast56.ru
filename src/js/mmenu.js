$(document).ready(function() {
  $("#mmenu").mmenu({
     // options
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