var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

$(document).ready(function()
{
    // toggles the mobile menu when clicked
    $(".nav-link").each(function() {
        $(this).click(function() {
            $(".navbar-toggler").trigger("click");
        })
    });
});


// this is to activate transition animation when it is visible on screen
function reveal() {
    var reveals = document.querySelectorAll(".slide, .tokenomics-box, .extend-lines, .serenity-dots");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);



// modals
function openVideo() {
    $("#videoModal").modal('show');
}

function openProfileModal(person, backColor) {

    $("#profileModal .profile-photo .photo").html("<img src='Content/images/" + person + "_525.png'>");
    $("#profileModal .profile-photo").css("background-color", backColor);

    if(person == 'tambari')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-12 profile-name">Tambari Pianwi</div>' +
            '<div class="col-12 profile-designation">CMO - Chief Marketing Officer</div>' +
            '<div class="col-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="https://t.me/BossBari" title="Telegram" target="_blank"><i class="fab fa-telegram fa-3x"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Tambari is a marketing professional with a diploma from Cornell University. He is the grassroots powerhouse that helps keep the community building and strong every day, through his powerful words, overwhelming positivity and genuine appreciation of everyone he interacts with.");
    }
    else if(person == 'aris')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-12 profile-name">Aris Cuevo</div>' +
            '<div class="col-12 profile-designation">COO - Chief Operating Officer</div>' +
            '<div class="col-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="https://t.me/mobileZ50" title="Telegram" target="_blank"><i class="fab fa-telegram fa-3x"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Aris is a business professional with over 20 years of experience in health care. He helps operate all business operations from HR, to accounting, to payroll.");
    }
    else if(person == 'will')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-12 profile-name">Will Schneider</div>' +
            '<div class="col-12 profile-designation">CEO - Chief Technical Officer</div>' +
            '<div class="col-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="https://t.me/oni_o_n" title="Telegram" target="_blank"><i class="fab fa-telegram fa-3x"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Will is a veteran of the technology sector with over 15 years of experience in programming, automation, and web development. He has a strong work ethic and will put in the hours, sweat, and muscle to push any part of the project forward. With prior experience working on project teams, he provides strategic support to the team.");
    }

    $("#profileModal").modal('show');
}