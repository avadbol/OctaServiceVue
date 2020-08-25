import {provinceAdd,provinceDelete,provinceGetById,provinceGetList,provinceUpdate} from "../../../../../api/define/province";

const state = {
    province: []
}

const getters = {
    provinceGetlist: state =>{
        return state.province;
    },
    provinceGetById: (state) => (id) => {
        return state.province.find(x => x.id == id)
    }
}

const mutations = {
    provinceUpdate(state, payload) {
        state.province.push(payload)
    }
}

const actions = {
    initProvince({commit}) {
        provinceGetList().then(response => {
            state.province = [];
            let data = response.data;
            for (let item in data){
                try {
                    let resultCountryId = data[item].countryId;
                    if(resultCountryId > 0){
                        let country = this.getters.countryGetById(data[item].countryId);
                        data[item].countryName = country.name;
                    }else data[item].countryName = "Seçilmemiş";
                    commit("provinceUpdate",data[item])
                }catch {}

            }
        })
    },
    provinceAdd({dispatch, commit, state}, payload) {
        const result = provinceAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initProvince');
                return 200;
            } else return 505;
        });
        return result;
    },
    provinceUpdate({dispatch, commit, state}, payload) {
        const result = provinceUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initProvince')
                return 200;
            } else return false;
        })
        return result;
    },
    provinceDelete({dispatch, commit, state}, payload) {
        const result = provinceDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initProvince')
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
