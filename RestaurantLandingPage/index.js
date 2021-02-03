$("#caroselWrapper > div:gt(0)").hide();

setInterval(function() {
    $('#caroselWrapper > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#caroselWrapper');
}, 3000);