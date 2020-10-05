import {
  safeGetById,
  safeGetlist,
  safeAdd,
  safeDelete,
  safeUpdate,
} from "../../../../../api/safe/safe";
const state = {
  safe: [],
};

const getters = {
  safeGetlist: (state) => {
    return state.safe;
  },
  safeGet(state) {
    return (key = state.safe.filter((element) => {
      return element.id == id;
    }));
  },
  safeGetById: (state) => (id) => {
    return state.safe.find((x) => x.id == id);
  },
};
const mutations = {
  safeUpdate(state, payload) {
    state.safe.push(payload);
  },
};

const actions = {
  initSafe({ commit }) {
    safeGetlist().then((response) => {
          state.safe = response.data;
      state.safe = [];

      let data = response.data;
      for (let item in data) {
        try {
          if (data[item].exchangeId > 0) {
            let exchange = this.getters.exchangeGetById(data[item].exchangeId);
            data[item].exchangeName = exchange.name;
          } else data[item].exchangeName = "Doviz Seçilmemiş";

          commit("safeUpdate", data[item]);
        } catch {}
      }
    });
  },
  safeAdd({ dispatch, commit, state }, payload) {
    const result = safeAdd(payload).then((response) => {
      if (response.status == 200) {
        dispatch("initSafe");
        return 200;
      } else return 505;
    });
    return result;
  },
  safeUpdate({ dispatch, commit, state }, payload) {
    const result = safeUpdate(payload).then((response) => {
      if (response.status == 200) {
        const resultItem = this.getters.safeGetById(safe.id);
        Object.assign(resultItem, safe);
        return 200;
      } else return false;
    });
    return result;
  },
  safeDelete({ dispatch, commit, state }, payload) {
    const result = safeDelete(payload).then((response) => {
      if (response.status == 200) {
        try {
          dispatch("initSafe");
          state.$delete(safe, safe.id);
        } catch {
          dispatch("initSafe");
        }
        return 200;
      } else return false;
    });
    return result;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
