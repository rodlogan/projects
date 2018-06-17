$("document").ready(function () {

$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl:true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.slider-text',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});
$('.slider-text').slick({
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick-slider',
    arrows: false,
    fade: true,
    dots: true
});

$(".scroll-link").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });


    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z-.×-×ª]+$/i.test(value);
    }, "Letters only please");



    $('#upper-contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: false
            },
            phone: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 12
            },
            email: {
                email: true

            }
        }
    });



    $('#bottom-contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: false
            },
            phone: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 12
            },
            email: {
                email: true

            }
        },messages: {
            phone: {
                required: "this field is required"
            }
        }
    });



});

