module App {
    "use strict";

    interface IMyAppDirective extends ng.IDirective {
    }

    interface IMyAppDirectiveScope extends ng.IScope {
    }

    interface IMyAppDirectiveAttributes extends ng.IAttributes {
    }

    MyAppDirective.$inject = ["$window"];
    function MyAppDirective($window: ng.IWindowService): IMyAppDirective {
        return {
            restrict: "EA",
            link: link,
            template: "<h1>Run a secured Angular Web Api app</h1>"
        }

        function link(scope: IMyAppDirectiveScope, element: ng.IAugmentedJQuery, attrs: IMyAppDirectiveAttributes) {

        }
    }

    angular.module("app").directive("myApp", MyAppDirective);
}