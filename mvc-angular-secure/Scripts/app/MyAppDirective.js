var App;
(function (App) {
    "use strict";
    MyAppDirective.$inject = ["$window"];
    function MyAppDirective($window) {
        return {
            restrict: "EA",
            link: link,
            template: "<h1>Run a secured Angular Web Api app</h1>"
        };
        function link(scope, element, attrs) {
        }
    }
    angular.module("app").directive("myApp", MyAppDirective);
})(App || (App = {}));
//# sourceMappingURL=MyAppDirective.js.map