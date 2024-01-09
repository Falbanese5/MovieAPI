(function() 
{

const movieDisplay = document.querySelector("#movie-display");

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
    const createRow = (product) =>
    {
      //movieDisplay.innerHTML +=  `<p>${product.title}</p>`
      console.log(movieDisplay.innerHTML);
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