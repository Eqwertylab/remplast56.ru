$('html').click(function() {
	var search = $('#search');
    search
    	.addClass('search_animate-out')
    	.removeClass('search_animate-in search_active');
});
$('#search').click(function(event){
    event.stopPropagation();
});
$('#search-toggle').click(function() {
	var search = $('#search');
	if(!$(this).hasClass('search_active')) {
		search
			.removeClass('search_animate-out')
			.addClass('search_animate-in search_active');

		$('#search-form').one("otransitionend oTransitionEnd msTransitionEnd transitionend",
		function(e) {
			setTimeout(function() {
					$('#search-input').focus();
				}, 500);
		});
	}
});



