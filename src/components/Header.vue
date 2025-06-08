<template>
  <header class="app-header" :class="{ 'hidden': !visible }">
    <div class="header-content">
      <router-link to="/catalog" class="logo-link">
        <h1 class="logo">🎬 KinoCon</h1>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      visible: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      if (currentScroll < 0) return
      if (Math.abs(currentScroll - this.lastScrollPosition) < 60) return
      this.visible = currentScroll < this.lastScrollPosition || currentScroll < 100
      this.lastScrollPosition = currentScroll
    }
  }
}
</script>

<style scoped>
.app-header {
  background-color: #121212;
  padding: 0.8rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.app-header.hidden {
  transform: translateY(-100%);
}

.header-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-link {
  text-decoration: none;
}

.logo {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #ffcc00; /* Простой яркий цвет */
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
  color: #ffaa00; /* Немного темнее при наведении */
}

.logo:hover {
  transform: scale(1.05);
}
</style>
