(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });


})(jQuery); // End of use strict

// SO CLOSE YET SO FAR
//     $(function() {
//         // Get the form.
//         var form = $('#ajax-contact');

//         // Get the messages div.
//         var formMessages = $('#form-messages');

//         // TODO: The rest of the code will go here...
//         $(form).submit(function(event) {
//         // Stop the browser from submitting the form.
//         // alert("SOMETHING");
//         event.preventDefault();
//         var formData = $(form).serialize();
//         // alert(formData);

//         $.ajax({
//         type: 'POST',
//         url: $(form).attr('action'),
//         data: formData
//         })

//         .done(function(response) {
//         // Make sure that the formMessages div has the 'success' class.
//             $(formMessages).removeClass('error');
//             $(formMessages).addClass('success');

//             // Set the message text.
//             $(formMessages).text(response);

//             // Clear the form.
//             $('#name').val('');
//             $('#email').val('');
//             $('#message').val('');
//         })

//         .fail(function(data) {
//             // Make sure that the formMessages div has the 'error' class.
//             $(formMessages).removeClass('success');
//             $(formMessages).addClass('error');

//             // Set the message text.
//             if (data.responseText !== '') {
//                 $(formMessages).text(data.responseText);
//             } else {
//                 $(formMessages).text('Oops! An error occured and your message could not be sent.');
//             }
//         });

//     // TODO
// });
// });
