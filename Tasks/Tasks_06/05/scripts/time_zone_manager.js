/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
 ***/
(function ($) {
    var TimeZoneManager = {
        // The currently selected time zones
        savedTimeZones: [],

        /**
         * Gets time zones from the server and loads them into a variable
         * Returns a format, e.g. "12:20:32"
         * @param completion
         */
        fetchTimeZones: function (completion) {
            var successFunction = _.bind(function (data) {
                // All selectable time zones
                this.timeZones = data;
                if (completion) completion(data);
            }, this);

            // Gets the time zones from the server
            $.ajax({
                url: "http://localhost:3000/clock/time_zones",
                headers: { Accept: "application/json" },
                success: successFunction,
            });
        },

        /**
         * Gets all time zones
         * @returns {Array}
         */
        allZones: function () {
            return this.timeZones;
        },

        /**
         * Adds a new zone at a given @index
         * @param {number} index
         */
        saveZoneAtIndex: function (index) {
            var zone = this.timeZones[index];
            this.savedTimeZones.push(zone);
        },

        /**
         * Deletes a zone at a given @index
         * @param {number} index
         */
        deleteZoneAtIndex: function (index) {
            this.savedTimeZones.splice(index, 1);
        },

        /**
         * Get the saved time zones
         * @param {boolean} includeCurrent - whether to include the current time zone
         * @returns {Array}
         */
        savedZones: function (includeCurrent) {
            var zones = [].concat(this.savedTimeZones);
            if (includeCurrent) {
                var refDate = new Date();
                var offsetMinutes = refDate.getTimezoneOffset();
                zones.unshift({
                    name: "Current",
                    zone_name: "Current",
                    offset: -offsetMinutes * 60,
                    formatted_offset: this.formatOffsetMinutes(-offsetMinutes),
                    isCurrent: true,
                });
            }
            return zones;
        },

        /**
         * Formats the minutes that each timezone is offset by
         * @param {number} offsetMinutes - whether to include the current time zone
         * @returns {string}
         */
        formatOffsetMinutes: function (offsetMinutes) {
            var offsetHours = offsetMinutes / 60;
            offsetHours = Math.abs(offsetHours).toString() + ":00";
            if (offsetMinutes < 600) offsetHours = "0" + offsetHours;
            if (offsetMinutes < 0) offsetHours = "-" + offsetHours;
            return offsetHours;
        },
    };

    // Register the TimeZoneManager under managers
    $.app.register("managers.TimeZoneManager", TimeZoneManager);
})(jQuery);
