import { createStore } from "vuex";

import commotActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {...commotActions, ...apiRequests}

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters
});
