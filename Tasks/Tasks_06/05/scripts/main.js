/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
 ***/
(function ($) {
    window.app = {};
    // Makes the window.app object available through jQuery
    $.app = window.app;
    // Initializes the namespaces object
    $.app.namespaces = {
        models: {},
    };

    var namespaces = $.app.namespaces;

    /**
     * Registers an object in a namespace
     * @param {string} namespace
     * @param {any} object
     */
    $.app.register = function (namespace, object) {
        var leaf = _.reduce(
            namespace.split("."),
            function (context, name) {
                context[name] = context[name] || {};
                context = context[name];
                return context;
            },
            namespaces
        );
        $.extend(leaf, object);
    };

    $(document).ready(function () {
        namespaces.controllers.MainViewController.initialize();
    });
})(jQuery);
