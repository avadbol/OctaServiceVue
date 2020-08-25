import {cariGetById,cariGetlist,cariAdd,cariDelete,cariUpdate} from "../../../../../api/cari/cari"

const state = {
    cari: []
}

const getters = {
    cariGetlist: state => {
        return state.cari;
    },
    cariGet(state) {
        return key = state.cari.filter(element => {
            return element.id == id;
        })
    },
    cariGetById: (state) => (id) => {
        return state.cari.find(x => x.id == id)
    }
}

const mutations = {
    cariUpdate(state, payload) {
        state.cari.push(payload)
    }
}

const actions = {
    initCari({commit}) {
        cariGetlist().then(response => {
            state.cari = response.data;
        })
    },
    cariAdd({dispatch, commit, state}, payload) {
        const result = cariAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCari');
                return 200;
            } else return 505;
        });
        return result;
    },
    cariUpdate({dispatch, commit, state}, payload) {
        const result = cariUpdate(payload).then(response => {
            if (response.status == 200) {
                const resultItem = this.getters.cariGetById(cari.id)
                Object.assign(resultItem, cari)
                return 200;
            } else return false;
        })
        return result;
    },
    cariDelete({dispatch, commit, state}, payload) {
        const result = cariDelete(payload).then(response => {
            if (response.status == 200) {
                try {
                    dispatch('initCari');
                    state.$delete(cari, cari.id)
                } catch {
                    dispatch('initCari');
                }
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