const API_KEY = 'd1e04095add9191679d32eaef7568e3d';

export const requests ={
    getNetflixOrignals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getPopularMovies:`movie/popular?api_key=${API_KEY}&language=en-US&page=1`
}