(function () {
    'use strict';

    var MODULE_NAME = 'moviesModel',
        N_NAMESPACE = 'nn';

    window[N_NAMESPACE] = window[N_NAMESPACE] || {};

    window[N_NAMESPACE][MODULE_NAME] = function () {
        var url = 'https://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        key = '&api_key=1ce4062c02f36f891b4c6971dacb589e',
        page = '&page=';

       function _searchMovies(movie, num) {
            return $.getJSON(url + mode + movie + page + num + key).then(function(data) {
                 return data;
            });
        }

        return {
            searchMovie: _searchMovies            
        };
    };
})();
