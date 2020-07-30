import {storageAdd,storageDelete,storageGetById,storageGetList,storageUpdate} from "../../../../../api/define/storage";

const state = {
    storages: []
}

const getters = {
    storageGetlist: state => {
        return state.storages;
    },
    storageGet: state => {
        return key = state.storages.filter(element => {
            return element.key == key;
        })
    },
    storageGetById: (state) => (id) => {
        return state.storages.find(x => x.id == id)
    }
}

const mutations = {
    storageUpdate(state, storage) {
        state.storages.push(storage)
    }
}

const actions = {
    initStorages({commit}) {
        storageGetList().then(response => {
            state.storages = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("storageUpdate", data[key])
            }
        })
    },
    storageAdd({dispatch, commit, state}, storege) {
        const result = storageAdd(storege).then(response => {
            if (response.status == 200) {
                dispatch('initStorages');
                return 200;
            } else return 505;
        });
        return result;
    },
    storageUpdate({dispatch, commit, state}, storage) {
        const result = storageUpdate(storage).then(response => {
            if (response.status == 200) {
                dispatch('initStorages')
                return 200;
            } else return false;
        })
        return result;
    },
    storageDelete({dispatch, commit, state}, storage) {
        const result = storageDelete(storage).then(response => {
            if (response.status == 200) {
                dispatch('initStorages')
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