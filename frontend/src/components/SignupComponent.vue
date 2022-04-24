<template>
  <b-div>
    <b-container fluid>
      <b-row>
        <b-col cols="5">
          <b-card
            title="Sing Up"
            sub-title="Bem vindo ao Help Calouro"
            bg-variant="dark"
            text-variant="light"
            class="card-body"
          >
            <b-form-group class="form-campo">
              <b-form-input type="text" placeholder="Nome"></b-form-input>
              <b-form-input type="text" placeholder="Sobrenome"></b-form-input>
              <b-form-input type="email" placeholder="E-mail"></b-form-input>
              <b-form-input type="password" placeholder="Senha"></b-form-input>
            </b-form-group>
            <b-button variant="outline-light">Cadastrar</b-button>
            <b-row>
              <router-link class="lnk" to="/">
                Já tem cadastro? Login
              </router-link>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="7">
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
.card-body {
  padding: 1rem 2rem;
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
  margin-top: 5%;
}

.lnk {
  font-size: 1em;
  margin-top: 5%;
}

.icone-login {
  margin-right: 5%;
}
</style>
