$(document).ready(function () {
    footerCenter();
    menuScroll();

})

function footerCenter() {
    var footerContainer = $('.footer-container'),
        footerHeader = $('footer h2.section-header');


    if ($(window).width() < 992) {
        footerHeader.removeClass('text-left');
        footerContainer.addClass('text-center');
    }

}

function menuScroll() {
    var navItem = $('#navigation-bar .navbar-nav a.nav-link');

    navItem.on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        $foo = $(target);

        $('html, body').animate({
            'scrollTop': $foo.offset().top
        }, 500, function () {
            window.location.hash = target;
        })

    })

}
