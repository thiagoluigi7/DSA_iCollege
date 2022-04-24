<template>
  <div class="homepage">
    <NavbarComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
  },
};
</script>
