<template>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Поиск по названию..."
      @input="$emit('update:modelValue', $event.target.value)"
      class="search-input"
    />
  </template>
  
  <script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
      return {
        searchTerm: this.modelValue
      }
    },
    watch: {
      modelValue(newVal) {
        this.searchTerm = newVal
      }
    }
  }
  </script>
  
  <style scoped>
  .search-input {
    width: 100%;
    padding: 12px 1px;
    margin: 20px 0;
    border: 2px solid #ddd;
    border-radius: 12px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  .search-input:focus {
    border-color: #42b983;
    outline: none;
  }
  </style>