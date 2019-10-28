import * as actions from "./Actions";
import * as mutations from "./Mutations";
import * as getters from "./Getters";
import defaultstate from "./DefaultState";

export default {
  namespaced: true,
  state: defaultstate,
  actions,
  mutations,
  getters
};
