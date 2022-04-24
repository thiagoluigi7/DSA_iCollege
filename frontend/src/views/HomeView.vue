<template>
  <div class="homepage">
    <NavbarComponent />
    <HeroHome />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroHome from "@/components/HeroHome.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroHome,
  },
};
</script>
