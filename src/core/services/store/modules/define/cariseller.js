import {carisellerAdd,carisellerDelete,carisellerGetById,carisellerGetList,carisellerUpdate} from "../../../../../api/define/cariseller";

const state = {
    cariseller: []
}

const getters = {
    carisellerGetlist: state => {
        return state.cariseller;
    },
    carisellerGet: state => {
        return key = state.cariseller.filter(element => {
            return element.key == key;
        })
    },
    carisellerGetById: (state) => (id) => {
        return state.cariseller.find(x => x.id == id)
    }
}

const mutations = {
    carisellerUpdate(state, payload) {
        state.cariseller.push(payload)
    }
}

const actions = {
    initCariseller({commit}) {
        carisellerGetList().then(response => {
            state.cariseller = response.data;
            // let data = response.data;
            // for (let key in data) {
            //     data[key].key = key;
            //     commit("colorUpdate", data[key])
            // }
        })
    },
    carisellerAdd({dispatch, commit, state}, payload) {
        const result = carisellerAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCariseller');
                return 200;
            } else return 505;
        });
        return result;
    },
    carisellerUpdate({dispatch, commit, state}, payload) {
        const result = carisellerUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCariseller')
                return 200;
            } else return false;
        })
        return result;
    },
    carisellerDelete({dispatch, commit, state}, payload) {
        const result = carisellerDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCariseller')
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