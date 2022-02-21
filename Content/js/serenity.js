var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

$(document).ready(function()
{
    $(".nav-link").each(function() {
        $(this).click(function() {
            $(".navbar-toggler").trigger("click");
        })
    });
})

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

function openVideo() {
    $("#videoModal").modal('show');
}

function openProfileModal(person, backColor) {
    if(person == 'creative_director')
    {
        $("#profileModal .profile-photo .photo").html("<img src='Content/Images/profile_pic_fun_" + person + ".png'>");
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">CEO</div>' +
            '<div class="col-sm-12 profile-designation">Owner / Developer</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="#" title="Telegram" target="_blank"><i class="fab fa-linkedin"></i></a></li>' +
                    '<li><a href="#" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>' +
                    '<li><a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Jack Sparru - The one and only CEO you'll ever need");
    }
    if(person == 'cmo')
    {
        $("#profileModal .profile-photo .photo").html("<img src='Content/Images/profile_pic_fun_" + person + ".png'>");
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">CMO</div>' +
            '<div class="col-sm-12 profile-designation">Marketing Guru</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="#" title="Telegram" target="_blank"><i class="fab fa-linkedin"></i></a></li>' +
                    '<li><a href="#" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>' +
                    '<li><a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("He can sell snow to Santa Claus");
    }
    if(person == 'cto')
    {
        $("#profileModal .profile-photo .photo").html("<img src='Content/Images/profile_pic_fun_" + person + ".png'>");
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">CTO</div>' +
            '<div class="col-sm-12 profile-designation">Techonology Wizard</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="#" title="Telegram" target="_blank"><i class="fab fa-linkedin"></i></a></li>' +
                    '<li><a href="#" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>' +
                    '<li><a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("He was surfing the Internet before it was even invented");
    }

    $("#profileModal").modal('show');
}