import {bodyAdd,bodyDelete,bodyGetById,bodyGetList,bodyUpdate} from "../../../../../api/define/body";

const state = {
    bodys: []
}

const getters = {
    bodyGetlist: state => {
        return state.bodys;
    },
    bodyGet: state => {
        return key = state.bodys.filter(element => {
            return element.key == key;
        })
    },
    bodyGetById: (state) => (id) => {
        return state.bodys.find(x => x.id == id)
    }
}

const mutations = {
    bodyUpdate(state, payload) {
        state.bodys.push(payload)
    }
}

const actions = {
    initBodys({commit}) {
        bodyGetList().then(response => {
            state.bodys = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("bodyUpdate", data[key])
            }
        })
    },
    bodyAdd({dispatch, commit, state}, body) {
        const result = bodyAdd(body).then(response => {
            if (response.status == 200) {
                dispatch('initBodys');
                return 200;
            } else return 505;
        });
        return result;
    },
    bodyUpdate({dispatch, commit, state}, body) {
        const result = bodyUpdate(body).then(response => {
            if (response.status == 200) {
                dispatch('initBodys')
                return 200;
            } else return false;
        })
        return result;
    },
    bodyDelete({dispatch, commit, state}, body) {
        const result = bodyDelete(body).then(response => {
            if (response.status == 200) {
                dispatch('initBodys')
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