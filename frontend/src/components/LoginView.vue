<template>
  <b-div>
    <b-container fluid>
      <b-row class="card-login card-body my-1">
        <b-card title="Sign In" sub-title="Entre com o seu email e senha">
          <b-form-group class="form-campo">
            <b-form-input type="email" placeholder="E-mail"></b-form-input>
            <b-form-input type="password" placeholder="Senha"></b-form-input>
          </b-form-group>
          <b-button variant="outline-dark">Entrar</b-button>
          <h5 class="texto-apoio">Faça seu login também pelo</h5>
          <b-icon class="icone-login" icon="google" font-scale="1.9"></b-icon>
          <b-icon icon="facebook" font-scale="2"></b-icon>
          <b-row>
            <b-link href="#" class="texto-apoio">Esqueceu a sua senha?</b-link>
          </b-row>
        </b-card>
      </b-row>
    </b-container>
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
.card-login {
  position: fixed;
  left: 28%;
  right: 28%;
  bottom: 1%;
}

.card-body {
  padding: 6rem 6rem;
}

.form-control {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}

.texto-apoio {
  font-size: 1em;
  margin-top: 5%;
}

.icone-login {
  margin-right: 5%;
}
</style>
