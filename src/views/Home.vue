<template>
  <div>
    <router-view></router-view>
    <Footer :userName="user.name" :userFirstname="user.firstname" /> <!-- Ajout du composant Footer, qui sera affiché sur toutes les vues enfants -->
  </div>
</template>
<script>
import userService from '@/services/userService';
import Footer from '@/components/Footer.vue' // Ajout du composant Footer
export default {
  name: 'Home',
  components: {
    Footer // Enregistrement du composant Footer
  },
  data() {
    return {
      user: userService.user
    }
  }
}
</script>

