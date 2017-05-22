'use strict';

const angular = require('angular');

angular.module('demoApp', [])
.component('cowsay', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log){
    $log.log('inside cowsay module');
    this.$onInit = function(){
      this.title = 'cowsay app';
    };
  }],
});
