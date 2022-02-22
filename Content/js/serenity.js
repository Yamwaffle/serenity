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

    $("#profileModal .profile-photo .photo").html("<img src='Content/images/" + person + "_525.png'>");
    $("#profileModal .profile-photo").css("background-color", backColor);

    if(person == 'deion')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">Deion Smith</div>' +
            '<div class="col-sm-12 profile-designation">Creative Director</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="https://t.me/RavenCryptokiddd" title="Telegram" target="_blank"><i class="fab fa-telegram fa-3x"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Deion is an avid crypto investor with a special interest in NFTs and the process behind their creation. His focus is sourcing the best independent artists and working closely with them to fuse Serenity's creative vision with their innate talent.");
    }
    else if(person == 'tambari')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">Tambari Pianwi</div>' +
            '<div class="col-sm-12 profile-designation">Marketing Director</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="https://t.me/BossBari" title="Telegram" target="_blank"><i class="fab fa-telegram fa-3x"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Tambari is a marketing professional with a diploma from Cornell University. He is the grassroots powerhouse that helps keep the community building and strong every day, through his powerful words, overwhelming positivity and genuine appreciation of everyone he interacts with.");
    }
    else if(person == 'harley')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">Harley Woods</div>' +
            '<div class="col-sm-12 profile-designation">Outreach Director</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
                '<hr>' +
                '<ul>' +
                    '<li><a href="https://t.me/KilluaCrypto" title="Telegram" target="_blank"><i class="fab fa-telegram fa-3x"></i></a></li>' +
                '</ul>' +
            '</div>'
        );
        $("#profileModal .profile-content-text").html("Harley is an experienced investor with experience managing a variety of social media platforms. He is primarily focused on keeping the Serenity social media presence alive and well. He embodies the ideals of the project with his calm demeanor, heartfelt style, and creative passion.");
    }
    else if(person == 'will')
    {
        $("#profileModal .profile-photo .profile-info").html(
            '<div class="col-sm-12 profile-name">Will Schneider</div>' +
            '<div class="col-sm-12 profile-designation">Operations Director</div>' +
            '<div class="col-sm-12 profile-social text-center">' +
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