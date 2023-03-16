<template>
  <div class="v-cart">
    <h1>{{ title }}</h1>

    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">Back</div>
    </router-link>
    <p v-if="!CART.length">Cart is empty</p>
    <v-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>


<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {},
  data() {
    return {
      title: "Cart",
    };
  },
  computed: {
    ...mapGetters(["CART"]),

    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
      } else {
        result = 0;
      }

      return result;
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
      console.log(index);
    },

    increment(index) {
        this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
        this.DECREMENT_CART_ITEM(index);
    }
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2;
    display: flex;
    justify-content: center;
    background: #db7c7c;
    color: #ffff;
    font-size: 20px;
  }
  .total_name {
    margin-right: $margin * 2;
  }
}
</style>