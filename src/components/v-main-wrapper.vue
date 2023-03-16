<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
      <router-view></router-view>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("comp v-main-wrapper");
  },
};
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>