<template>
  <div>
    <div class="v-catalog">
      <h1>{{ title }}</h1>
      <router-link :to="{name: 'cart'}">
        <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
      </router-link>
      
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
      title: "Catalog",
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  watch: {},
  mounted() {
    
    console.log("comp v-catalog");
    this.GET_PRODUCTS_FROM_API().then(() => {
      console.log('data arrived')
    })
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
  }
}
</style>