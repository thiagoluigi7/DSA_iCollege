<template>
  <b-container>
    <b-div class="texto-header">
      <b-jumbotron
        header="Help Calouro"
        lead="Seja bem vindo a melhor fonte de informação sobre a sua universidade 😎"
        border-variant="dark"
        text-variant="dark"
        class="hero-home"
      >
        <p>O primeiro passo para a sua vida acadêmica está aqui</p>
        <b-button variant="dark" href="#/login">Inscreva-se</b-button>
      </b-jumbotron>
    </b-div>
  </b-container>
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
.hero-home {
  padding: 2rem 2rem;
  margin: 2rem;
}
</style>
