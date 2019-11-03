<template>
  <div id="app">
    <Jumbotron/>
    <switch-component/>
    <Footer/>
  </div>
</template>

<script>
import Jumbotron from "./components/Jumbotron.vue"
import SwitchComponent from "./components/SwitchComponent.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'app',
  components: {
    Jumbotron,
    SwitchComponent,
    Footer
  }
}
</script>

<style>

</style>
