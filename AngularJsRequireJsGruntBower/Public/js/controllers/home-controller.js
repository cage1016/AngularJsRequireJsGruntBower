define(['controllers/controllers'], function (controllers) {
    // home controller
    controllers.controller('HomeCtrl', ['$scope', 'BOOK',
        function ($scope, BOOK) {
            console.log('HomeCtrl execute.');

            $scope.books = BOOK.get({}, function (books) {
                return books;
            });
        }
    ]);
});