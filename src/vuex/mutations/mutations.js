export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(function (item) {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
        product.quantity = 1;
      }
    } else {
      state.cart.push(product);
      product.quantity = 1;
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT_ITEM: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT_ITEM: (state, index) => {
    if (state.cart[index].quantity > 0) {
      state.cart[index].quantity--;
    }
  },
};
