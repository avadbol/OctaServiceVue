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
        state.bank=[];
        let data = response.data;
        for (let item in data) {
            try {
              if (data[item].exchangeId > 0) {
                let exchange = this.getters.exchangeGetById(data[item].exchangeId);
                data[item].exchangeName = exchange.name;
              } else data[item].exchangeName = "Döviz Seçilmemiş";

              if (data[item].districtId > 0) {
                let district = this.getters.districtGetById(data[item].districtId);
                data[item].districtName = district.name;
              } else data[item].districtName = "İlçe Seçilmemiş";
              
              if (data[item].districtId > 0) {
                let district = this.getters.districtGetById(data[item].districtId);
                data[item].districtName = district.name;
              } else data[item].districtName = "İlçe Seçilmemiş";
              commit("bankUpdate", data[item]);
            } catch {}
          }
    //   state.bank = response.data;
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
