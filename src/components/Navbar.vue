<template>
  <div class="w-11/12 block mx-auto pt-2">
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">
          <img src="../assets/images/logo-pic.png" class="d-inline-block align-top w-8 h-8" alt="Klassifier" />
          KLASSIFIER
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item
          to="/Document"
          >Document</b-nav-item>
          <b-nav-item
          to="/Classify"
          >Classification</b-nav-item>
          <b-nav-item
          to="/Visualize"
          >Visualization</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>