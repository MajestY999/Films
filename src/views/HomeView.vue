<template>
  <div class="home-view">
    <h1 class="welcome-title">Добро пожаловать в KinoCon!</h1>
    <p class="welcome-subtitle">Ваш лучший онлайн кинотеатр фильмов и сериалов</p>
    <router-link to="/catalog" class="catalog-button">Перейти к списку фильмов</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* чтобы занимал всю высоту экрана */
  text-align: center;
  padding: 20px;
  background-color: #121212; /* темный фон, как в хедере */
  color: #eee; /* светлый цвет текста для контраста */
}

.welcome-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease;
}

.welcome-subtitle {
  font-size: 1.2rem;
  color: #ccc; /* чуть светлее для подзаголовка */
  margin-bottom: 30px;
  animation: fadeIn 1.5s ease;
}

.catalog-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #6883a7;
  color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.2s;
  animation: pulse 2s infinite;
}

.catalog-button:hover {
  background-color: #1d9ebe;
  transform: scale(1.05);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
