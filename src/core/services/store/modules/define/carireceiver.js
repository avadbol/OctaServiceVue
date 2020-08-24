import {carireceiverAdd,carireceiverDelete,carireceiverGetById,carireceiverGetList,carireceiverUpdate} from "../../../../../api/define/carireceiver";

const state = {
    carireceiver: []
}

const getters = {
    carireceiverGetlist: state => {
        return state.carireceiver;
    },
    carireceiverGet: state => {
        return key = state.carireceiver.filter(element => {
            return element.key == key;
        })
    },
    carireceiverGetById: (state) => (id) => {
        return state.carireceiver.find(x => x.id == id)
    }
}

const mutations = {
    carireceiverUpdate(state, payload) {
        state.carireceiver.push(payload)
    }
}

const actions = {
    initCarireceiver({commit}) {
        carireceiverGetList().then(response => {
            state.carireceiver = response.data;
            // let data = response.data;
            // for (let key in data) {
            //     data[key].key = key;
            //     commit("colorUpdate", data[key])
            // }
        })
    },
    carireceiverAdd({dispatch, commit, state}, payload) {
        const result = carireceiverAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCarireceiver');
                return 200;
            } else return 505;
        });
        return result;
    },
    carireceiverUpdate({dispatch, commit, state}, payload) {
        const result = carireceiverUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCarireceiver')
                return 200;
            } else return false;
        })
        return result;
    },
    carireceiverDelete({dispatch, commit, state}, payload) {
        const result = carireceiverDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCarireceiver')
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