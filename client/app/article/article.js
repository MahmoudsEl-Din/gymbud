'use strict';

angular.module('gymbudApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('article', {
        url: '/articles',
        templateUrl: 'app/article/article.html',
        controller: 'ArticleCtrl'
      });
  });