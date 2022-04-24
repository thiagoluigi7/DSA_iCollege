<template>
  <b-div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="nav-text">Help Calouro</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button
            pill
            variant="outline-light"
            class="btn-login"
            href="#/login"
          >
            Sign In
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute t o limit CSS to this component only -->
<style scoped lang="scss">
.nav-text {
  margin-left: 45rem;
  font-weight: bold;
}

.btn-login {
  margin-left: 35rem;
}
</style>
