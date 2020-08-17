import {countryAdd,countryDelete,countryGetById,countryGetList,countryUpdate} from "../../../../../api/define/country";

const state = {
    country: []
}

const getters = {
    countryGetlist: state => {
        return state.country;
    },
    countryGet: state => {
        return key = state.country.filter(element => {
            return element.key == key;
        })
    },
    countryGetById: (state) => (id) => {
        return state.country.find(x => x.id == id)
    }
}

const mutations = {
    countryUpdate(state, payload) {
        state.country.push(payload)
    }
}

const actions = {
    initCountrys({commit}) {
        countryGetList().then(response => {
            state.country = [];
            let data = response.data;
        })
    },
    countryAdd({dispatch, commit, state}, payload) {
        const result = countryAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCountrys');
                return 200;
            } else return 505;
        });
        return result;
    },
    countryUpdate({dispatch, commit, state}, payload) {
        const result = countryUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCountrys')
                return 200;
            } else return false;
        })
        return result;
    },
    countryDelete({dispatch, commit, state}, payload) {
        const result = countryDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCountrys')
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
