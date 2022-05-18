/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
***/
(function($) {

  var namespaces = $.app.namespaces,
      tzManager = namespaces.managers.TimeZoneManager;

  var Clock = {

    // Initializes clock functionality
    start: function() {
      this.tick();
      var tickFunction = _.bind(this.tick, this);
      setInterval(tickFunction, 1000);
    },

    /**
         * Updates the time of each clock
         */
    tick : function() {
      var date = new Date(),
          zones = tzManager.savedZones(true);
          /**
             * Updates a clock with the given index, represented by @element
             * @param {number} index
             * @param {HTMLElement} element
             */
      var updateClockAtIndex = function(index, element) {
        var zone = zones[index],
            formattedTime = this.convertAndFormatDate(zone.offset, date);
        $(element).text(formattedTime);
      };
      updateClockAtIndex = _.bind(updateClockAtIndex, this);
      $(".clock-time").each(updateClockAtIndex);
    },

     /**
         * Converts and formats a given @date and offets it by @offset
         * Returns a format, e.g. "12:20:32"
         * @param {number} offset
         * @param {Date} date
         * @returns {string}
         */
    convertAndFormatDate : function(offset, date) {
      var convertedSeconds = date.getUTCMinutes() * 60 +
            date.getUTCHours() * 3600 + offset,
          hour = Math.floor(convertedSeconds / 3600),
          minutes = Math.abs(
            Math.floor((convertedSeconds - (hour * 3600)) / 60)
          );
      if (hour < 0) {
        hour = hour + 24;
      } else if (hour >= 24) {
        hour = hour - 24;
      }
      var formattedTime = this.zeroPad(hour) + ":" + this.zeroPad(minutes);
      return formattedTime;
    },

     /**
         * Pads a @number with zeroes
         * For example:
         * 5 -> "05"
         * 15 -> "15"
         * @param {number} number the number to pad
         * @returns {string}
         */
    zeroPad : function(number) {
      var s = number.toString();
      var formattedNumber = (s.length > 1) ? s : "0" + s;
      return formattedNumber;
    }
  };

   // Registers this in the models.Clock namespace
  $.app.register("models.Clock", Clock);

})(jQuery);

