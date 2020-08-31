import {
  bankGetById,
  bankGetlist,
  bankAdd,
  bankDelete,
  bankUpdate,
} from "../../../../../api/bank/bank";
const state = {
    bank: []
}
const getters = {
  bankGetlist: (state) => {
    return state.bank;
  },
  bankGet(state) {
    return (key = state.bank.filter((element) => {
      return element.id == id;
    }));
  },
  bankGetById: (state) => (id) => {
    return state.bank.find((x) => x.id == id);
  },
};

const mutations = {
  bankUpdate(state, payload) {
    state.bank.push(payload);
  },
};

const actions = {
  initBank({ commit }) {
    bankGetlist().then((response) => {
      state.bank = response.data;
    });
  },
  bankAdd({ dispatch, commit, state }, payload) {
    const result = bankAdd(payload).then((response) => {
      if (response.status == 200) {
        dispatch("initBank");
        return 200;
      } else return 505;
    });
    return result;
  },
  bankUpdate({ dispatch, commit, state }, payload) {
    const result = bankUpdate(payload).then((response) => {
      if (response.status == 200) {
        const resultItem = this.getters.bankGetById(bank.id);
        Object.assign(resultItem, bank);
        return 200;
      } else return false;
    });
    return result;
  },
  bankDelete({ dispatch, commit, state }, payload) {
    const result = bankDelete(payload).then((response) => {
      if (response.status == 200) {
        try {
          dispatch("initBank");
          state.$delete(bank, bank.id);
        } catch {
          dispatch("initBank");
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
