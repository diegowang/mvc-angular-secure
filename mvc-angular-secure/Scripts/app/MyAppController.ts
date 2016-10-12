﻿module App {
    "use strict";

    interface IMyAppController {
        values: string[];
        errorMessage: string;
        isVisibleErrorMessage: boolean
    }

    export class MyAppController implements IMyAppController {
        errorMessage: string = "";
        isVisibleErrorMessage: boolean = false;
        values: string[] = [];

        static $inject: string[] = ["$http", "$window"];
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService) {
            this.getValues();
        }

        private getValues(): string[] {
            this.$http.get("/api/values")
                .then((response: ng.IHttpPromiseCallbackArg<string[]>) => {
                    this.isVisibleErrorMessage = false;
                    this.values = response.data;
                })
                .catch(((reason: ng.IHttpPromiseCallbackArg<string[]>) => {
                    this.isVisibleErrorMessage = true;
                    this.errorMessage = reason.statusText;
                }))
                return this.values;
        };
    }
}

    angular.module("app").controller("MyAppController", App.MyAppController);