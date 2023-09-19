<template>
    <section class="projects">
      <h2>Past Projects</h2>
      <div class="project" v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Bank using C#",
            description: "I create a bank that can change account, withdraw, deposit, and add money to an account.",
          },
          {
            id: 2,
            title: "Space shooter game using c++",
            description: "I create a simple space shooter program that can be play, restart, also it show the score we got.",
          },
          
        ],
      };
    },
  };
  </script>
  
  