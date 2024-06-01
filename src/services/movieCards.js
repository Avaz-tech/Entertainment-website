let url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

// Call the function to populate movie cards
document.addEventListener("DOMContentLoaded", function () {
  const moviesBtn = document.getElementById("movies-btn");
  const tvshowsBtn = document.getElementById("tvshows-btn");
  const documentariesBtn = document.getElementById("documentaries-btn");

  // Function to fetch movie data from API
  async function fetchMovieData(searchQuery = "") {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRiMDRkZTNhYThhMzBmOGUzMzExODFiNTA3ZjVlMyIsInN1YiI6IjY2Mzg3ZmNjMzU4ZGE3MDEyNDU2ZGY2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iORKLg5dC3haEexcC7ewLzVJ08UKzxaEiaQ3ehLABRg",
      },
    };

    try {
      let fetchUrl = url;
      if (searchQuery) {
        fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=1`;
      }
      const response = await fetch(fetchUrl, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return []; // Return empty array in case of error
    }
  }

  // Function to update movie cards with fetched data
  async function updateMovieCards(searchQuery = "") {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
    const movieData = await fetchMovieData(searchQuery);
    const movieDataPart = document.querySelector(".movie-data-part");

    // Clear existing movie cards
    movieDataPart.innerHTML = "";

    console.log(movieData);
    // Iterate through movie data and update each card
    movieData?.results?.forEach((movie, index) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add(`movie-${index + 1}`, "movie-card");

      movieCard.innerHTML = `
        <img src="${baseUrl}/${
        movie.poster_path
      }" alt="movie-img" class="movie-img" />
        <div class="movie-details">
          <title class="movie-title">${movie.title || movie.name}</title>
          <span class="movie-year">${
            movie.release_date || movie.first_air_date || "Upcoming"
          }</span>
        </div>
        <div class="movie-info">
          <span class="movie-quality">HD</span>
          <div class="duration-and-rating">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            <span class="rating">${movie.vote_count}</span>
          </div>
        </div>
      `;

      movieDataPart.appendChild(movieCard);
    });
  }

  moviesBtn.addEventListener("click", function () {
    url =
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
    updateMovieCards();
  });
  tvshowsBtn.addEventListener("click", function () {
    url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1";
    updateMovieCards();
  });
  documentariesBtn.addEventListener("click", function () {
    url = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";
    updateMovieCards();
  });

  updateMovieCards();

  // Create and ssappend the search bar
  const searchContainer = document.querySelector(".search-container");
  const searchInput = searchContainer.querySelector(".search-input");
  const searchIcon = document.querySelector(".fa-search");

  searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("visible");

    $("html, body").animate(
      {
        scrollTop: $("#latest-movies-section").offset().top,
      },
      1000
    );
  });

  const searchBtn = searchContainer.querySelector(".search-btn");
  // update movie cards with search results when search icon is clicked
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      updateMovieCards(query);
    }
  });
  // update movie cards with search results when Enter is clicked
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        updateMovieCards(query);
      }
    }
  });
});
