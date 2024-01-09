(function() 
{



const movies = 
{
  method: 'GET',
  headers:
  {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzgyYmJhZjhhMzdiN2FkNzlkY2NiYjUzMmQ3NWQ2OCIsInN1YiI6IjY1OTRiNDVkNTkwN2RlNTNkYzYzYmYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FPOFL7rIMt82Q9_YXF6pRJh4kxwd-VKAWpUJSDDDhw0'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', movies)
  .then(response => response.json())
  .then(response => 
  {
    const createRow = (movie) =>
    {
      document.querySelector("#movie-display").innerHTML +=  
      `<div class="col-6">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.overview}</p>
              <p class="card-text"><small class="text-muted">${movie.vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`
      //console.log(movieDisplay.innerHTML);
    }
    for(let product of response.results)
    {
      createRow(product);
      console.log();
    }
  })
    
 .catch((error) => 
 {
    console.error(error);
 });

const tvShows = 
{
  method: 'GET',
  headers: 
  {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzgyYmJhZjhhMzdiN2FkNzlkY2NiYjUzMmQ3NWQ2OCIsInN1YiI6IjY1OTRiNDVkNTkwN2RlNTNkYzYzYmYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FPOFL7rIMt82Q9_YXF6pRJh4kxwd-VKAWpUJSDDDhw0'
  }
};
  
  fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', tvShows)
    .then(response => response.json())
    .then(response => console.log(response))
    
    .catch(err => console.error(err));

})();