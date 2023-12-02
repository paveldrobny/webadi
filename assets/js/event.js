$('#search-button').click(function(){
    $("#overlay-search").addClass("is-show");
    $('html').addClass("is-scroll-disable")
});

$('#search-close').click(function(){
    $("#overlay-search").removeClass("is-show");
    $('html').removeClass("is-scroll-disable")
});