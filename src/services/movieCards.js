// Function to fetch movie data from API
async function fetchMovieData() {
  const url = "https://imdb8.p.rapidapi.com/auto-complete?q=king";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b59a6d9f3cmsh28955d6aaab4c90p15867bjsn84ab70cf077d",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.d;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return []; // Return empty array in case of error
  }
}

// Function to update movie cards with fetched data
async function updateMovieCards() {
  const movieData = await fetchMovieData();
  const movieDataPart = document.querySelector(".movie-data-part");
  console.log(movieData);
  // Iterate through movie data and update each card
  movieData?.forEach((movie, index) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add(`movie-${index + 1}`, "movie-card");

    movieCard.innerHTML = `
        <img src="${movie.i?.imageUrl}" alt="movie-img" class="movie-img" />
        <div class="movie-details">
          <title class="movie-title">${movie.l}</title>
          <span class="movie-year">${movie.y ? movie.y : "Upcoming"}</span>
        </div>
        <div class="movie-info">
          <span class="movie-quality">HD</span>
          <div class="duration-and-rating">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            <span class="rating">${movie.rank}</span>
          </div>
        </div>
      `;

    movieDataPart.appendChild(movieCard);
  });
}

// Call the function to populate movie cards
document.addEventListener("DOMContentLoaded", function () {
  updateMovieCards();
});
