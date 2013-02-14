/*
 * brokenImage: a jQuery plugin
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
  $.extend($.fn, {
    brokenImage: function (options) {
      var defaults = {
        timeout: 5000
      };

      options = $.extend(defaults, options);

      return this.each(function () {
        // Replace the image with a placeholder if:
        // a. loading fails with an error event or;
        // b. loading takes longer than timeout
        var image = this;

        $(image).bind('error', function () {
          insertPlaceholder();
        });

        setTimeout(function () {
          var test = new Image(); // Virgin image with no styles to affect dimensions
          test.src = image.src;

          if (test.height === 0) {
            insertPlaceholder();
          }
        }, options.timeout);

        function insertPlaceholder() {
          options.replacement ? image.src = options.replacement : $(image).css({visibility: 'hidden'});
        }
      });
    }
  });
})(jQuery);
