function adjustWizardHeight() {
    const $wizard = $('.wiz');
    const $activeMenu = $wizard.find('.nested.display');

    if ($activeMenu.length === 0) {
        const topLevelHeight = $wizard.children().not('.nest').outerHeight(true) + $wizard.children('.nest > .group').outerHeight(true);
        $wizard.height(topLevelHeight);
    } else {
        const activeMenuHeight = $activeMenu.outerHeight();
        $wizard.height(activeMenuHeight);
    }
}
$(".wiz .next").on("click", function () {
    const $currentMenu = $(this).closest('.nest');
    const $wizard = $('.wiz');
    let currentLevel = $wizard.attr('class').match(/level(\d+)/);
    currentLevel = currentLevel ? parseInt(currentLevel[1]) : 1;
    $wizard.removeClass(`level${currentLevel}`).addClass(`level${currentLevel + 1}`);
    $currentMenu.find('> .nested').addClass('display');
    adjustWizardHeight()
});

$(".wiz .prev").on("click", function () {
    const $wizard = $('.wiz');
    let currentLevel = $wizard.attr('class').match(/level(\d+)/);
    currentLevel = currentLevel ? parseInt(currentLevel[1]) : 1;
    $wizard.removeClass(`level${currentLevel}`).addClass(`level${currentLevel - 1}`);
    $(this).closest('.nested').removeClass('display');
    adjustWizardHeight()
});

$(".wiz .prev").each(function () {
    var prevName = $(this).parent().prev().find('a').text();
    $(this).find('span').text(prevName);
})
$('.toggler').on('click', function () {
    $('.mobileMenu').hasClass('open')
        ? $('.mobileMenu').removeClass('open')
        : $('.mobileMenu').addClass('open')
})

$(document).ready(function () {
    $('.searcher').on('click', function () {
        $('.searchBox').hasClass('open')
            ? $('.searchBox').removeClass('open')
            : $('.searchBox').addClass('open');
    });
    adjustWizardHeight();
});
$(document).mouseup(function (ev) {
    var search = $('.searchBox, .searcher')
    if (!search.is(ev.target) && search.has(ev.target).length === 0) {
        $(".searchBox").removeClass("open");
    }
    var mobileMenu = $('.mobileMenu, .toggler')
    if (!mobileMenu.is(ev.target) && mobileMenu.has(ev.target).length === 0) {
        $('.mobileMenu').removeClass('open');
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