<script>
import { defineComponent } from 'vue'
import { fetchNewMovies } from '../store/api';

export default {
  name: 'new_movies',
  // type inference enabled
  props: {
    // name: String,
    // msg: { type: String, required: true }
  },
  data: () => ({
    movies = [],
    period: ''
  }),
  computed: {

  },
  mounted() {
    this.movies = fetchNewMovies()
    // this.name // type: string | undefined
    // this.msg // type: string
    // this.count // type: number
  },
  created() {
   
    this.movies = fetchNewMovies() 
  },
  methods: {
    asysn const movies = () => await fetchNewMovies(),
  }
}

// const movies = 

// console.log('== new movies 1 ==')
// console.log(movies)

// console.log('== new movies 2 ==')

// console.log(movies)

// for (movie in movies) {
//   console.log('xx')
//   console.log(movie.title)
// }

</script>

<template>
  <div>
    <div class="uppercase underline">New on Letterboxd</div>

    {{ movies }}

    <li v-for="movie in movies" :key="movie.title">
      
      <span>{{ movie.title }}</span>
      
    </li>
    
  </div>
</template>