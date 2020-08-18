import {districtAdd,districtDelete,districtGetById,districtGetList,districtUpdate} from "../../../../../api/define/district";

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
    initDistrict({commit}) {
        districtGetList().then(response => {
            // state.district = response.data;
            let data = response.data;
            for (let item in data){
                //ülkeye ihtiyaç

                // console.log(data[item]);
                // let resultProvinceId = data[item].provinceId;
                // let resultCountryId = data[item].countryId;
                // if(resultCountryId > 0){
                //     let country = this.getters.countryGetById(data[item].countryId);
                //     data[item].countryName = country.name;
                // }else data[item].countryName = "Seçilmemiş";
                // commit("provinceUpdate",data[item])
            }
        })
    },
    districtAdd({dispatch, commit, state}, payload) {
        const result = districtAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initDistrict');
                return 200;
            } else return 505;
        });
        return result;
    },
    districtUpdate({dispatch, commit, state}, payload) {
        const result = districtUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initDistrict')
                return 200;
            } else return false;
        })
        return result;
    },
    districtDelete({dispatch, commit, state}, payload) {
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
