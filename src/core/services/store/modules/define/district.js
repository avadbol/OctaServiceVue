import { districtAdd, districtDelete, districtGetById, districtGetList, districtUpdate } from "../../../../../api/define/district";


const state = {
    district: []
}

const getters = {
    districtGetlist: state => {
        return state.district;
    },
    districtGetById: (state) => (id) => {
        return state.district.find(x => x.id == id)
    }
}

const mutations = {
    districtUpdate(state, payload) {
        state.district.push(payload)
    }
}

const actions = {
    initDistrict({ commit }) {
        districtGetList().then(response => {
            state.district = [];
            let data = response.data;
            for (let item in data) {
                try {
                    let province = this.getters.provinceGetById(data[item].provinceId);
                    let country = this.getters.countryGetById(province.countryId);
                    data[item].provinceName = province.name;
                    data[item].provinceId = province.id;
                    data[item].countryName = country.name;
                    data[item].countryId = country.id;
                    commit("districtUpdate", data[item])
                } catch {}

            }

        })
    },
    districtAdd({ dispatch, commit, state }, payload) {
        const result = districtAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initDistrict');
                return 200;
            } else return 505;
        });
        return result;
    },
    districtUpdate({ dispatch, commit, state }, payload) {
        const result = districtUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initDistrict')
                return 200;
            } else return false;
        })
        return result;
    },
    districtDelete({ dispatch, commit, state }, payload) {
        const result = districtDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initDistrict')
                return 200;
            } else return false;
        })
        return result;
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}