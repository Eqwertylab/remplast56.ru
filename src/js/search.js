function searchHide() {
  var search = $('#search');
    search
      .addClass('search_animate-out')
      .removeClass('search_animate-in search_active');
}

$('body').on('click touchstart', searchHide);

$('#search').on('click touchstart',function(event){
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
      if(isMobile) {
        $('#search-input').focus();
      } else {
        setTimeout(function() {
          $('#search-input').focus();
        }, 500);
      }
    });
  }
});