var App;
(function (App) {
    "use strict";
    var MyAppController = (function () {
        function MyAppController($http, $window) {
            this.$http = $http;
            this.$window = $window;
            this.errorMessage = "";
            this.isVisibleErrorMessage = false;
            this.values = [];
            this.getValues();
        }
        MyAppController.prototype.getValues = function () {
            var _this = this;
            this.$http.get("/api/values")
                .then(function (response) {
                _this.isVisibleErrorMessage = false;
                _this.values = response.data;
            })
                .catch((function (reason) {
                if (reason.status == 401) {
                    _this.$window.location.href = '/Account/Login?returnurl=/Home/About';
                }
                else {
                    _this.isVisibleErrorMessage = true;
                    _this.errorMessage = reason.statusText;
                }
            }));
            return this.values;
        };
        ;
        MyAppController.$inject = ["$http", "$window"];
        return MyAppController;
    }());
    App.MyAppController = MyAppController;
})(App || (App = {}));
angular.module("app").controller("MyAppController", App.MyAppController);
//# sourceMappingURL=MyAppController.js.map