<template>
  <div class="arealogada">
    <NavbarLogado />
    <HeroLogado />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarLogado from "@/components/NavbarLogado.vue";
import HeroLogado from "@/components/HeroLogado.vue";

export default {
  name: "HomeView",
  components: {
    NavbarLogado,
    HeroLogado,
  },
};
</script>
