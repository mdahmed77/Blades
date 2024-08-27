const packets = document.querySelectorAll(".packet");
const THROTTLE_INTERVAL = 10; // Adjust this as needed
let lastTime = 0;
window.addEventListener("mousemove", (ev) => {
    const currentTime = Date.now();
    if (currentTime - lastTime < THROTTLE_INTERVAL) {
        return; // Throttle the event
    }

    lastTime = currentTime;

    packets.forEach((packet) => {
        const blob = packet.querySelector(".blob");
        const fblob = packet.querySelector(".fakeblob");
        const rec = fblob.getBoundingClientRect();
        blob.style.opacity = "1";

        requestAnimationFrame(() => {
            blob.style.transform = `translate(${(ev.clientX - rec.left) - (rec.width / 2)}px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`;
        });
    });
});
$(document).ready(function () {
    // All the ALERTS Dynamically showing from here
    const alertPlaceholder = $('#alertPlaceholder');
    function alert(message, type) {
        const wrapper = $([
            '<div class="alert alert-' + type + ' alert-dismissible" role="alert">',
            '   <div>' + message + '</div>',
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join(''));

        alertPlaceholder.append(wrapper);
        setTimeout(function () {
            wrapper.remove();
        }, 2000);
    }
    const saveAlert = $('#saveProfile');
    if (saveAlert.length) {
        saveAlert.on('click', function () {
            alert('Your profile has been saved', 'success');
            saveAlert.css('pointer-events', 'none');
            setTimeout(function () {
                saveAlert.css('pointer-events', 'all');
            }, 2000);
        });
    }
    const deactivateAlert = $('#deactivateProfile');
    if (deactivateAlert.length) {
        deactivateAlert.on('click', function () {
            alert('Your profile has been deactivated', 'danger');
            deactivateAlert.css('pointer-events', 'none');
            setTimeout(function () {
                deactivateAlert.css('pointer-events', 'all');
            }, 2000);
        });
    }
    // Add to Collection
    const saveIcon = $('.save-icon');
    if (saveIcon.length) {
        saveIcon.on('click', function () {
            alert('Icon added to collection', 'success');
            saveIcon.css('pointer-events', 'none');
            setTimeout(function () {
                saveIcon.css('pointer-events', 'all');
            }, 2000);
        });
    }
    // Copy to Clipboard
    const copyIcon = $('.copy-icon');
    if (copyIcon.length) {
        copyIcon.on('click', function () {
            alert('Copied PNG icon', 'success');
            copyIcon.css('pointer-events', 'none');
            setTimeout(function () {
                copyIcon.css('pointer-events', 'all');
            }, 2000);
        });
    }
    // ALerts END
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
    // $(".overlay, .closeMenu").on("click", function () {
    //     $('.overlay').removeClass("visible");
    //     $(".menu").removeClass("open");
    //     $(".btn-menu").removeClass('active');
    // });
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
    var date = new Date().getFullYear();
    $("#year").text(date);
    $('.icons-filter span').each(function () {
        $(this).on('click', function () {
            $(this).hasClass('active')
                ? $(this).removeClass('active')
                : $('.icons-filter span').removeClass('active') && $(this).addClass('active');
        });
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
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