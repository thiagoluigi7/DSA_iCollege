<template>
  <div class="home">
    <LoginView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginView from "@/components/LoginView.vue";

export default {
  name: "HomeView",
  components: {
    LoginView,
  },
};
</script>
