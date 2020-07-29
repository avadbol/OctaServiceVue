import {colorAdd,colorDelete,colorGetById,colorGetList,colorUpdate} from "../../../../../api/define/color";

const state = {
    colors: []
}

const getters = {
    colorGetlist: state => {
        return state.colors;
    },
    colorGet: state => {
        return key = state.colors.filter(element => {
            return element.key == key;
        })
    },
    colorGetById: (state) => (id) => {
        return state.colors.find(x => x.id == id)
    }
}

const mutations = {
    colorUpdate(state, payload) {
        state.colors.push(payload)
    }
}

const actions = {
    initColors({commit}) {
        colorGetList().then(response => {
            state.colors = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("colorUpdate", data[key])
            }
        })
    },
    colorAdd({dispatch, commit, state}, color) {
        const result = colorAdd(color).then(response => {
            if (response.status == 200) {
                dispatch('initColors');
                return 200;
            } else return 505;
        });
        return result;
    },
    colorUpdate({dispatch, commit, state}, color) {
        const result = colorUpdate(color).then(response => {
            if (response.status == 200) {
                dispatch('initColors')
                return 200;
            } else return false;
        })
        return result;
    },
    colorDelete({dispatch, commit, state}, color) {
        const result = colorDelete(color).then(response => {
            if (response.status == 200) {
                dispatch('initColors')
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