// Base URL for the API
const BASE_URL = 'http://localhost:3000/films';

// Fetch and display the first movie's details
function fetchFirstMovie() {
  fetch(`${BASE_URL}/1`)
    .then(response => response.json())
    .then(data => {
      displayMovieDetails(data);
    })
    .catch(error => console.error('Error fetching the first movie:', error));
}

// Fetch and display the list of movies
function fetchMovies() {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(movies => {
      populateMovieList(movies);
    })
    .catch(error => console.error('Error fetching movies:', error));
}

// Populate the movie list
function populateMovieList(movies) {
  const filmList = document.getElementById('films');
  filmList.innerHTML = ''; // Clear any existing content

  movies.forEach(movie => {
    const movieItem = document.createElement('li');
    movieItem.className = 'film item';
    movieItem.textContent = movie.title;
    movieItem.addEventListener('click', () => displayMovieDetails(movie));
    filmList.appendChild(movieItem);
  });
}

// Display the movie details
function displayMovieDetails(movie) {
  const poster = document.getElementById('poster');
  const title = document.getElementById('title');
  const runtime = document.getElementById('runtime');
  const filmInfo = document.getElementById('film-info');
  const showtime = document.getElementById('showtime');
  const ticketNum = document.getElementById('ticket-num');
  const buyTicketButton = document.getElementById('buy-ticket');

  poster.src = movie.poster;
  title.textContent = movie.title;
  runtime.textContent = `${movie.runtime} minutes`;
  filmInfo.textContent = movie.description;
  showtime.textContent = movie.showtime;
  const availableTickets = movie.capacity - movie.tickets_sold;
  ticketNum.textContent = `${availableTickets} remaining tickets`;

  buyTicketButton.textContent = 'Buy Ticket'; // Reset button text
  buyTicketButton.disabled = availableTickets === 0; // Disable if sold out

  // Add event listener for buying a ticket
  buyTicketButton.onclick = () => buyTicket(movie);
}

// Buy a ticket
function buyTicket(movie) {
  const availableTickets = movie.capacity - movie.tickets_sold;
  if (availableTickets > 0) {
    // Update the number of tickets sold
    const updatedTicketsSold = movie.tickets_sold + 1;

    // Send a PATCH request to update the server
    fetch(`${BASE_URL}/${movie.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tickets_sold: updatedTicketsSold })
    })
    .then(response => response.json())
    .then(updatedMovie => {
      // Update the frontend with the new number of tickets
      movie.tickets_sold = updatedMovie.tickets_sold;
      displayMovieDetails(movie);

      // Check if tickets are sold out
      if (updatedMovie.capacity - updatedMovie.tickets_sold === 0) {
        const buyTicketButton = document.getElementById('buy-ticket');
        buyTicketButton.textContent = 'Sold Out';
        buyTicketButton.disabled = true;
      }
    })
    .catch(error => console.error('Error updating ticket count:', error));
  }
}

// Initial load: Fetch the first movie and list of movies
document.addEventListener('DOMContentLoaded', () => {
  fetchFirstMovie();
  fetchMovies();
});

