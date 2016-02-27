$('html').click(function() {
    $('#search').removeClass('search_active');
});
$('#search-toggle').click(function() {
    $('#search').toggleClass('search_active');
    $('#search-input').focus();
});
$('#search').click(function(event){
    event.stopPropagation();
});
