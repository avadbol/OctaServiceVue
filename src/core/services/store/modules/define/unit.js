import {unitAdd,unitDelete,unitGetById,unitGetList,unitUpdate} from "../../../../../api/define/unit";

const state = {
    units: []
}

const getters = {
    unitGetlist: state => {
        return state.units;
    },
    unitGet: state => {
        return key = state.units.filter(element => {
            return element.key == key;
        })
    },
    unitGetById: (state) => (id) => {
        return state.units.find(x => x.id == id)
    }
}

const mutations = {
    unitUpdate(state, payload) {
        state.units.push(payload)
    }
}

const actions = {
    initUnits({commit}) {
        unitGetList().then(response => {
            state.units = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("unitUpdate", data[key])
            }
        })
    },
    unitAdd({dispatch, commit, state}, unit) {
        const result = unitAdd(unit).then(response => {
            if (response.status == 200) {
                dispatch('initUnits');
                return 200;
            } else return 505;
        });
        return result;
    },
    unitUpdate({dispatch, commit, state}, unit) {
        const result = unitUpdate(unit).then(response => {
            if (response.status == 200) {
                dispatch('initUnits')
                return 200;
            } else return false;
        })
        return result;
    },
    unitDelete({dispatch, commit, state}, unit) {
        const result = unitDelete(unit).then(response => {
            if (response.status == 200) {
                dispatch('initUnits')
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