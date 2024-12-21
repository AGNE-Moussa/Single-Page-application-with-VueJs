<template>
  <div>
    <p>Nom complet : {{ userName }} {{ userFirstname }}</p>
  </div>

</template>

<script>
export default {
  name:'Footer',
  props: {
    userName: String,
    userFirstname: String
  }
}
</script>
