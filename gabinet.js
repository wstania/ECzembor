$(document).ready(function(){
    $('li').mouseover(function(){
        $(this).addClass("hvr-underline-from-center");
    });
    $('.feature.bordered.mb30 .uppercase').mouseover(function(){
        $(this).addClass("hvr-float-shadow");
    });
   $('a[href^="#"]').on('click', function() {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

});

