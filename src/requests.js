const API_KEY = "866d4a8df10451e0ae7e7b41011847e9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZkNGE4ZGYxMDQ1MWUwYWU3ZTdiNDEwMTE4NDdlOSIsInN1YiI6IjY2MTgyNDg5NmJlYWVhMDFhOTM4Y2NiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W1s2GKg71RN6WM_zPJWL09JplZvKD_NF5xsJx2rNQCU
