AOS.init({
    offset: 200,
    delay: 50,
    duration: 1000,
    easing: 'ease-in-out',
    mirror: true,
    once: false,
    anchorplacement: 'top-center',
});

$(document).ready(function () {
    $(".btn-menu").on("click", function () {
        $(this).hasClass("active")
            ? $(this).removeClass('active')
            : $(this).addClass('active');
        $(".navigation").hasClass("in-view")
            ? $(".navigation").removeClass("in-view")
            : $(".navigation").addClass("in-view");
        $(".overlay").hasClass("visible")
            ? $(".overlay").removeClass("visible")
            : $(".overlay").addClass("visible");
    });
    $('.sort span').on('click', function () {
        $('.sort span').hasClass('open')
            ? $('.sort span').removeClass('open')
            : $('.sort span').addClass('open');
    });
    $('.activeUser .inline-flex').on('click', function () {
        $('.activeUser .drop').hasClass('open')
            ? $('.activeUser .drop').removeClass('open')
            : $('.activeUser .drop').addClass('open');
    });
    $('.icons-filter span').each(function () {
        $(this).on('click', function () {
            $(this).hasClass('active')
                ? $(this).removeClass('active')
                : $('.icons-filter span').removeClass('active') && $(this).addClass('active');
        });
    });
});
$(document).mouseup(function (ev) {
    var sidebar = $('.btn-menu, .navigation')
    if (!sidebar.is(ev.target) && sidebar.has(ev.target).length === 0) {
        $(".navigation").removeClass("in-view");
    }
    var activeUser = $('.activeUser')
    if (!activeUser.is(ev.target) && activeUser.has(ev.target).length === 0) {
        $('.activeUser .drop').removeClass('open');
    }
    var activeSearchFilter = $('.icons-filter');
    if (!activeSearchFilter.is(ev.target) && activeSearchFilter.has(ev.target).length === 0) {
        $('.icons-filter span').removeClass('active');
    }
    var sortFilter = $('.sort');
    if (!sortFilter.is(ev.target) && sortFilter.has(ev.target).length === 0) {
        $('.sort span').removeClass('open');
    }
});