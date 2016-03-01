'use strict';

var app = angular.module('caverosite');

app.controller('HomeController', ['$http', function($http) {
    var self = this;

    self.welcomeMessage = '';
    self.actualiteiten = '';

    $http.get('/rest/content/welcome').then(function(response) {
        self.welcomeMessage = response.data;
    });
    $http.get('/rest/content/actualiteiten').then(function(response) {
        self.actualiteiten = response.data;
    });

}]);