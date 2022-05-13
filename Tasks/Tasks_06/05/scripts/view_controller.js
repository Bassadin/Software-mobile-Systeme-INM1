/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
 ***/
(function ($) {
    // Initialize the variables needed for the controller namespace
    var namespaces = $.app.namespaces,
        clock = namespaces.models.Clock,
        timeZoneManager = namespaces.managers.TimeZoneManager,
        clockList = $("#clockList"),
        zoneList = $("#zoneList"),
        editLink = $("a#editLink"),
        addClockLink = $("a#addClockLink");

    var MainViewController = {
        // Initialize the main view controller
        initialize: function () {
            this.configureListeners();
            this.refreshClockList();
            zoneList.hide();
            clock.start();

            timeZoneManager.fetchTimeZones();
        },

        /**
         * Add the event listeners for multiple HTMLElements
         */
        configureListeners: function () {
            this.openZoneListFunction = _.bind(this.addClockClicked, this);
            this.closeZoneListFunction = _.bind(this.dismissZoneList, this);
            this.editFunction = _.bind(this.editClicked, this);
            this.doneEditingFunction = _.bind(this.doneClicked, this);
            this.deleteClockFunction = _.bind(this.deleteClockClicked, this);
            addClockLink.click(this.openZoneListFunction);
            editLink.click(this.editFunction);
        },

        /**
         * Handle the click event to add a new clock
         */
        addClockClicked: function () {
            if (zoneList.children().length === 0) {
                var zones = timeZoneManager.allZones(),
                    clickHandler = _.bind(this.zoneClicked, this),
                    template = $("#timeZoneTemplate").text();
                _.each(zones, function (zone, index) {
                    var item = $(Mustache.render(template, zone));
                    item.data("zoneIndex", index);
                    item.click(clickHandler);
                    zoneList.append(item);
                });
            }
            this.presentZoneList();
        },

        /**
         * Handle the click on a zone to add as a clock
         */
        zoneClicked: function (event) {
            var item = $(event.currentTarget),
                index = item.data("zoneIndex");
            timeZoneManager.saveZoneAtIndex(index);
            this.dismissZoneList();
            this.refreshClockList();
        },

        /**
         * Edit button click handler
         */
        editClicked: function (event) {
            this.presentEditMode();
        },

        /**
         * Done button clicked
         */
        doneClicked: function (event) {
            this.dismissEditMode();
        },

        /**
         * Show the time zone list
         */
        presentZoneList: function () {
            this.dismissEditMode();
            addClockLink.text("Cancel");
            addClockLink.off("click").click(this.closeZoneListFunction);
            zoneList.show();
        },

        /**
         * Dismiss the time zone list
         */
        dismissZoneList: function () {
            addClockLink.text("Add Clock");
            addClockLink.off("click").click(this.openZoneListFunction);
            zoneList.hide();
        },

        /**
         * Show the edit mode
         */
        presentEditMode: function () {
            $(".delete-clock-link").show();
            editLink.text("Done");
            editLink.off("click").click(this.doneEditingFunction);
        },

        /**
         * Dismiss the edit mode
         */
        dismissEditMode: function () {
            $(".delete-clock-link").hide();
            editLink.text("Edit");
            editLink.off("click").click(this.editFunction);
        },

        /**
         * Refresh the list of displayed clocks after deletion
         */
        refreshClockList: function () {
            var zones = timeZoneManager.savedZones(true),
                template = $("#clockTemplate").text();
            clockList.empty();
            _.each(
                zones,
                function (zone, index) {
                    this.createClock(zone, index, template);
                },
                this
            );
            $(".delete-clock-link").hide();
            clock.tick();
        },

        /**
         * Load the template for a clock to display a new one
         */
        createClock: function (zone, index, template) {
            var item = $(Mustache.render(template, zone)),
                deleteLink = item.find(".delete-clock-link");
            if (zone.isCurrent) {
                deleteLink.remove();
            } else {
                deleteLink.data("clockIndex", index - 1);
                deleteLink.click(this.deleteClockFunction);
            }
            clockList.append(item);
        },

        /**
         * Handle clock deletion
         */
        deleteClockClicked: function (event) {
            var clickedLink = $(event.currentTarget),
                index = clickedLink.data("clockIndex"),
                parentDiv = clickedLink.parents(".clock");
            timeZoneManager.deleteZoneAtIndex(index);
            parentDiv.remove();
        },
    };

    $.app.register("controllers.MainViewController", MainViewController);
})(jQuery);
