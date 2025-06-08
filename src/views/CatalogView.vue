<template>
  <div class="catalog-view">
    <h1>Каталог фильмов</h1>
    <SearchBar v-model="searchTerm" />
    <div class="movies-container">
      <router-link
        v-for="movie in filteredMovies"
        :key="movie.id"
        :to="`/details/${movie.id}`"
        class="movie-card"
      >
        <div v-if="movie.image" class="movie-image-container">
          <img :src="movie.image" :alt="movie.title" class="movie-image" />
        </div>
        <div v-else class="movie-image-placeholder">
          {{ movie.title.charAt(0).toUpperCase() }}
        </div>

        <div class="movie-content">
          <h3>{{ movie.title }}</h3>
          <p class="movie-genre">{{ movie.genre }}</p>
          <p class="movie-short-desc">{{ movie.shortDesc }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import movies from '@/data/movies.js'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: { SearchBar },
  setup() {
    const searchTerm = ref('')

    const filteredMovies = computed(() => {
      if (!searchTerm.value) return movies
      const term = searchTerm.value.toLowerCase()
      return movies.filter(movie =>
        movie.title.toLowerCase().includes(term) ||
        movie.genre.toLowerCase().includes(term)
      )
    })

    return { searchTerm, filteredMovies }
  }
}
</script>

<style scoped>
.catalog-view {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: #1e1e2f;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.6);
  color: #eee;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #ffcc00;
  text-shadow: 0 0 5px #ffcc00;
}

.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.movie-card {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(255 204 0 / 0.25);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: #eee;
  background: #2a2a3d;
  height: 100%;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(255 204 0 / 0.7);
}

.movie-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.movie-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  filter: brightness(0.9);
}

.movie-card:hover .movie-image {
  transform: scale(1.05);
  filter: brightness(1);
}

.movie-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #444466 0%, #222233 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffcc00;
  font-weight: bold;
  font-size: 48px;
  text-shadow: 0 0 5px #ffcc00;
}

.movie-content {
  padding: 15px;
}

.movie-content h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffcc00;
  text-shadow: 0 0 3px #ffcc00;
}

.movie-genre {
  color: #aaa;
  font-size: 14px;
  margin: 0 0 10px 0;
}

.movie-short-desc {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #ddd;
}
</style>
