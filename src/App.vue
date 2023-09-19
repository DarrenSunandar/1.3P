<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/HeaderPage.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
/* Add global styles here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
}

/* Customize the style of the header */
header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #ff5733; /* Change to your desired hover color */
}
</style>
