$(document).ready(function(){
    $('li').mouseover(function(){
        $(this).addClass("hvr-underline-from-center");
    });
    $('.feature.bordered.mb30 .uppercase').mouseover(function(){
        $(this).addClass("hvr-float-shadow");
    });




        $(document).on("scroll", onScroll);

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 900, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });


    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('ul.menu').find('a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }


});

