function searchHide() {
  var search = $('#search');
    search
      .addClass('search_animate-out')
      .removeClass('search_animate-in search_active');
}

function searchShow() {
  var search = $('#search');
    search
      .removeClass('search_animate-out')
      .addClass('search_animate-in search_active');
}

$('body').on('click touchstart', searchHide);
var scrollBarWidth = getScrollBarWidth();
$('#search-form').on('click touchstart',function(event){
    event.stopPropagation();
    var search = $('#search');
    if(!$('#search').hasClass('search_active')) {
      searchShow();

      if(document.documentElement.offsetWidth >= 768 - window.scrollBarWidth) {

        $('#search-form').one("otransitionend oTransitionEnd msTransitionEnd transitionend",
        function(e) {
          setTimeout(function() {
              $('#search-input').focus();
            }, 500);
        });
        return false;
      }
    }
});
