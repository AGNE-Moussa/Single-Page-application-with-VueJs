<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">Liste des livres</router-link>
    </div>
    <div class="navbar-brand">
      <router-link to="/form">Formulaire livre</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BookMenu"
}
</script>

<style scoped>
.navbar {
  background-color: #007bff; 
  padding: 10px 0; 
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar-brand {
  margin: 0 10px;
}

.navbar-brand a {
  color: #fff; 
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-brand a:hover {
  background-color: #0056b3; 
}
</style>
