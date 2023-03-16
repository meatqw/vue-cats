<template>
  <div>
    <div class="v-cart-item">
      <h1>{{ title }}</h1>
      <img
        class="v-cart-item__image"
        :src="require('../../assets/images/' + cart_item_data.image)"
        alt="img"
      />
      <div class="v-cart-item__info">
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.article }}</p>
      </div>
      <div class="v-cart-item__quantity">
        <p>Qty:</p>
        <span class="quantity__btn" @click="decrement">-</span>
        <span>{{ cart_item_data.quantity }}</span>
        <span class="quantity__btn" @click="increment">+</span>
      </div>
      <button class="delete btn" @click="deleteFromCart">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      title: "cart item",
    };
  },
  computed: {},
  methods: {
    decrement() {
      this.$emit("decrement");
    },
    increment() {
      this.$emit("increment");
    },

    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  &__image {
    width: 100px;
    height: 100px;
  }
  .quantity__btn {
    cursor: pointer;

  }
}
</style>