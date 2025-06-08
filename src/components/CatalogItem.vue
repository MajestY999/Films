<template>
  <router-link :to="`/details/${movie.id}`" class="movie-card">
    <div v-if="movie.image" class="movie-image-container">
      <img 
        :src="`/images/${movie.image}`" 
        :alt="movie.title" 
        class="movie-image"
      >
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
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.movie-card {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: #333;
  background: rgb(255, 255, 255);
  height: 100%;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
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
}

.movie-card:hover .movie-image {
  transform: scale(1.05);
}

.movie-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-weight: bold;
  font-size: 48px;
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
}

.movie-genre {
  color: #666;
  font-size: 14px;
  margin: 0 0 10px 0;
}

.movie-short-desc {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>