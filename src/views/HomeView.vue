<script>
import NavBar from '../components/NavBar.vue'

export default {
  data: () => {

  },
  computed: {

  },
  components: {
    
  }
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="greeting">
      <p class="text-xl tracking-tight text-gray-400 sm:text-3xl">Welcome back. Here’s what we’ve been watching…</p>
      <p class="mt-6 text-lg leading-8 text-gray-400">This homepage will become customized as you follow active members on Letterboxd.</p>
    </div>
   
  </div>
</template>

<style scoped>
.greeting {
  height: 100px;
}
</style>