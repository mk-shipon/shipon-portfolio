
//mobile menu
function openNav() {
    document.getElementById("m-manu-cover").style.left = "0";
}
function closeNav() {
    document.getElementById("m-manu-cover").style.left = "-110%";
}


$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});



$(document).ready(function () {
    //sticky manu
    $(".js--second-section").waypoint(function (direction) {
        if (direction == "down") {
            $(".sticky-menu").addClass("sticky");

        } else {
            $(".sticky-menu").removeClass("sticky");

        }


    });


    //mixup box 

    var mixer = mixitup('.container');
});

