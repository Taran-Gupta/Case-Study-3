"use strict";

(function ($, Drupal) {
  Drupal.behaviors.legacyAccordion = {
    attach: function attach(context, settings) {
      var accordionElements = once('legacyAccordion', ".legacyAccordion", context);
      $(accordionElements).each(function () {
        // Add aria attributes and classes.
        $('.accordions h3').attr({
          'tabindex': '0',
          'aria-expanded': 'false',
          'role': 'tab'
        }).addClass('accordion__title');
        $('.accordions div.field-items').attr({
          'aria-hidden': 'true',
          'role': 'tabpanel'
        }).addClass('accordion__panel'); // Toggle content on click.

        $('.accordions').each(function () {
          var $this = $(this);
          $this.find('h3, .accordion__panel').next('div').css({
            'display': 'none'
          });
          $this.find('h3.accordion__title').on('click', function () {
            $(this).parents('.accordions').toggleClass('active');
            $(this).next('div').slideToggle(); // Add ARIA states.

            if ($(this).attr('aria-expanded') === 'false') {
              $(this).attr('aria-expanded', 'true');
              $('.accordion__panel').attr('aria-hidden', 'false');
            } else {
              $(this).attr('aria-expanded', 'false');
              $('.accordion__panel').attr('aria-hidden', 'true');
              $(this).blur();
            }
          }); // Adding keydown to accordion__title.

          $this.find('h3.accordion__title').keypress(function (e) {
            var key = e.which;

            if (key == 13) {
              $(this).trigger('click');
              return false;
            }
          });
        });
      });
    }
  };
})(jQuery, Drupal);