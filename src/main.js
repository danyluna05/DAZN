/*eslint-disable no-unused-vars*/
const N_NAMESPACE = 'nn',
    MODULE_NAME = 'moviesModel';
var instance = window[N_NAMESPACE][MODULE_NAME]();
var pathImage = 'https://image.tmdb.org/t/p/w185';

function init() {
    initSearchMovie();
}

function initSearchMovie() {
    $('#search').click(function () {
        searchMovie(1);            
    });
}

/** Search the movies by the name and page*/
function searchMovie(page) {
    let movieName = $('#movie').val();
    if (movieName === '') {
        $('#noResults').html('Please enter the name of the movie');
        $('#noResults').removeClass('hidden');
        $('#noResults').addClass('show');      
    } else {
        $('#noResults').removeClass('show');
        $('#noResults').addClass('hidden');
        instance.searchMovie(movieName, page).done(function(data) {
            renderMovies(data.results);
            renderPagination(data.total_pages, data.page);
        });
        
    }
}

/** Render the movie result into the table*/
function renderMovies(movies) {
    let tbody = $('#movies-items > tbody');
    $(tbody).empty();
    let html = '';
    for (let movie of movies) {    
        html += '<tr>';
        html += '<td class="movie-column">';
        html += '<img src='+ pathImage + movie.poster_path + '>';
        html += '</td>';
        html += '<td class="movie-column">';
        html += '<h3 class="tittle">' +  movie.title + '</h3>';
        html += '<p> '+ movie.overview + '</p>';
        html += '</td>';
        html += '</tr>';
    }    
    $(tbody).append(html);    
}

/** Include the pagination for the movies*/
function renderPagination(pages, currentPage) {
   $('#pagination').empty();
   let styleClass= 'default-pagination';     
   let html = '<div class="pagination">';
   for(let page=1; page <= pages; page++){
       if(page === currentPage){
           styleClass = 'active';
       } else {
           styleClass= 'default-pagination';
       }
       html += '<a href="#" onclick="searchMovie('+ page +')" class="'+ styleClass +'">' + page + '</a>';
   }  
   html += '</div>';
   $('#pagination').append(html); 
}

