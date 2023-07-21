const API_KEY = 'd1e04095add9191679d32eaef7568e3d';

export const requests = {
    getNetflixOrignals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getMovies: (endpoints) => `movie/${endpoints}?api_key=${API_KEY}&language=en-US&page=1`,
    getTv: (endpoints) => `tv/${endpoints}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoDetails: (type) => `${type.platform}/${type.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`,
}

export const endpoints = {
    popular: 'popular',
    topRated: 'top_rated',
    nowPlaying: 'now_playing',
    upcoming: 'upcoming',
    airingToday: 'airing_today',
    onTheAir: 'on_the_air',

}