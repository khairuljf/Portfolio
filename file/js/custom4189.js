/////////////////* NAVIGATION */////////////////////////
jQuery(window).load(function () {
    "use strict";
     if ((screen.width >= 1024) && (screen.height >= 768)) { 
        jQuery('#navigation a').stop().animate({ 'marginLeft': '130px' }, 1000);

        jQuery('#navigation > li').hover(
                    function () {
                        jQuery('a', jQuery(this)).stop().animate({ 'marginLeft': '2px' }, 200);
                    },
                    function () {
                        jQuery('a', jQuery(this)).stop().animate({ 'marginLeft': '130px' }, 200);
                    });
    }
else {
        jQuery('#navigation a').stop().animate({ 'marginLeft': '130px' }, 1000);
    }
});
    jQuery(document).ready(function () {
      "use strict";
        jQuery(".trigger").click(function () {
            jQuery(".panel").toggle("fast");
            jQuery(this).toggleClass("active");
            return false;
        });
    });
jQuery(document).ready(function () {
  "use strict";
        jQuery(".search-button").click(function () {
            jQuery(".panel2").toggle("fast");
            jQuery(this).toggleClass("active");
            return false;
        });
    });

/////////////////* HINT */////////////////////////

                if ("ontouchstart" in document.documentElement) {
                    document.querySelector(".hint").innerHTML = "<span>Tap on the left or right to navigate</span>";
                }

/////////////////* AJAX CONTACT FORM */////////////////////////

var messageDelay = 2000;  // How long to display status messages (in milliseconds)

// Init the form once the document is ready
jQuery(init);


// Initialize the form

function init() {
  "use strict";
    jQuery('#contactForm').hide().submit(submitForm).addClass('positioned');
    jQuery('a[href="#contactForm"]').click(function () {
        jQuery('#content').fadeTo('slow', 0.2);
        jQuery('#contactForm').fadeIn('slow', function () {
            jQuery('#senderName').focus();
        });

        return false;
    });

    // When the "Cancel" button is clicked, close the form
    jQuery('#cancel').click(function () {
        jQuery('#contactForm').fadeOut();
        jQuery('#content').fadeTo('slow', 1);
    });

    // When the "Escape" key is pressed, close the form
    jQuery('#contactForm').keydown(function (event) {
        if (event.which === 27) {
            jQuery('#contactForm').fadeOut();
            jQuery('#content').fadeTo('slow', 1);
        }
    });

}
function submitForm() {
  "use strict";
    var contactForm = $(this);
    if (!jQuery('#senderName').val() || !jQuery('#senderEmail').val() || !jQuery('#message').val()) {
        jQuery('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
        contactForm.fadeOut().delay(messageDelay).fadeIn();

    } else {

        jQuery('#sendingMessage').fadeIn();
        contactForm.fadeOut();

        jQuery.ajax({
            url: contactForm.attr('action') + "?ajax=true",
            type: contactForm.attr('method'),
            data: contactForm.serialize(),
            success: submitFinished
        });
    }
    return false;
}
function submitFinished(response) {
  "use strict";
    response = jQuery.trim(response);
    jQuery('#sendingMessage').fadeOut();
    if (response === "success") {
        jQuery('#successMessage').fadeIn().delay(messageDelay).fadeOut();
        jQuery('#senderName').val("");
        jQuery('#senderEmail').val("");
        jQuery('#message').val("");

        jQuery('#content').delay(messageDelay + 500).fadeTo('slow', 1);

    } else {
        jQuery('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
        jQuery('#contactForm').delay(messageDelay + 500).fadeIn();
    }
}
/////////////////* ACCORDION */////////////////////////
jQuery(document).ready(function () {
  "use strict";
    jQuery('.accordion-header').toggleClass('inactive-header');
    var contentwidth = jQuery('.accordion-header').width();
    jQuery('.accordion-content').css({ 'width': contentwidth });

    jQuery('.accordion-header').click(function () {
        if (jQuery(this).is('.inactive-header')) {
            jQuery('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            jQuery(this).toggleClass('active-header').toggleClass('inactive-header');
            jQuery(this).next().slideToggle().toggleClass('open-content');
        }

        else {
            jQuery(this).toggleClass('active-header').toggleClass('inactive-header');
            jQuery(this).next().slideToggle().toggleClass('open-content');
        }
    });

    return false;
});
