import axios from 'axios';
const ACCESS_TOKEN = import.meta.env.ACCESS_TOKEN;
// const API_IMAGE: {
//   small: 'https://image.tmdb.org/t/p/w185/',
//   medium: 'https://image.tmdb.org/t/p/w300/',
//   large: 'https://image.tmdb.org/t/p/w500/',
//   original: 'https://image.tmdb.org/t/p/original/'
// }
const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + ACCESS_TOKEN
    }
});
export const fetchNewMovies = () => {
    return client.get('/movie/now_playing', {
        params: {
            'language': 'en-US',
            'page': '1'
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
};
// export default {
//   fetchNewMovies() {
//     return client.get('/movie/now_playing', {
//       params: {
//         'language': 'en-US',
//         'page': '1'
//       }
//     }).then(res => {
//       const data = res.data
//       console.log('== api ==')
//       console.log(res.data)
//     }).catch(err => {
//       console.log(err)
//     })
//   },
//   fetchPopularMovies() {
//   },
//   fetchLatestNews() {
//   },
//   fetchPopularReviews() {
//   },
//   fetchPopularLists() {
//   },
//   fetchRecentStories() {
//   },
//   fetchRecentShowdowns() {
//   },
//   fetchRecentNews() {
//   },
//   fetchItems() {
//   },
//   fetchImage() {
//   },
// }
//# sourceMappingURL=api.js.map