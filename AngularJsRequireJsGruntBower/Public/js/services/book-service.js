define(['services/services'], function (services) {
    // Book resource
    services.factory('BOOK', ['$resource', function ($resource) {
        var resetUrl = '/api/Book';
        var resource = $resource(resetUrl, {}, { get: { method: 'GET', isArray: true } });

        return resource;
    }]);

    // BookLoader
    services.factory('BookLoader', ['$q', 'BOOK', function ($q, BOOK) {
        return function () {
            var delay = $q.defer();
            BOOK.get(function (data) {
                delay.resolve(data);
            }, function (error) {
                delay.reject('Unable to fetch Book list');
            });
            return delay.promise;
        };
    }]);
});