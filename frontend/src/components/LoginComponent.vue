<template>
  <b-div>
    <b-container fluid>
      <b-row>
        <b-col cols="5">
          <b-card
            title="Sign In"
            sub-title="Entre com o seu email e senha"
            align="center"
            bg-variant="dark"
            text-variant="light"
            class="card-login card-body"
          >
            <b-form-group class="form-campo">
              <b-form-input type="email" placeholder="E-mail"></b-form-input>
              <b-form-input type="password" placeholder="Senha"></b-form-input>
            </b-form-group>
            <b-button variant="outline-light">Entrar</b-button>
            <h5 class="texto-apoio">Faça seu login também pelo</h5>
            <b-icon class="icone-login" icon="google" font-scale="1.9"></b-icon>
            <b-icon icon="facebook" font-scale="2"></b-icon>
            <b-row>
              <router-link to="/forgot-password">Esqueceu a senha?</router-link>
              <router-link to="/signup">Cadastre-se</router-link>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
          <b-img
            src="https://images.nappy.co/uploads/large/1961596841346zu5vf0latqluw2c58l6b14yffpkiydblxdmqhy7mdrlucy1kilakud3jxfzxqm8as4cixmezovofdyzxj5bbysfj8uzlp3exfkcu.jpg?auto=format&fm=jpg&w=1280&q=75"
            fluid
          ></b-img>
        </b-col>
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
  padding: 2rem 2rem;
  top: 5rem;
  left: 3rem;
  z-index: 0;
}

.form-control {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}

.texto-apoio {
  font-size: 1em;
  margin-top: 3%;
}

.icone-login {
  margin-right: 5%;
}
</style>
