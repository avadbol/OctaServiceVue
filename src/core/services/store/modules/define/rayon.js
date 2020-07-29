import {rayonAdd, rayonDelete, rayonGetList, rayonUpdate, rayonGetById} from "../../../../../api/define/rayon";

const state = {
    rayons: []
}

const getters = {
    rayonGetlist: state => {
        return state.rayons;
    },
    rayonGet: state => {
        return key = state.rayon.filter(element => {
            return element.key == key;
        })
    },
    rayonGetById: (state) => (id) => {
        return state.rayons.find(x => x.id == id)
    }
}

const mutations = {
    rayonUpdate(state, rayon) {
        state.rayons.push(rayon)
    }
}

const actions = {
    initRayons({commit}) {
        rayonGetList().then(response => {
            state.rayons = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("rayonUpdate", data[key])
            }
        })
    },
    rayonAdd({dispatch, commit, state}, rayon) {
        const result = rayonAdd(rayon).then(response => {
            if (response.status == 200) {
                dispatch('initRayons');
                return 200;
            } else return 505;
        });
        return result;
    },
    rayonUpdate({dispatch, commit, state}, rayon) {
        const result = rayonUpdate(rayon).then(response => {
            if (response.status == 200) {
                dispatch('initRayons')
                return 200;
            } else return false;
        })
        return result;
    },
    rayonDelete({dispatch, commit, state}, rayon) {
        const result = rayonDelete(rayon).then(response => {
            if (response.status == 200) {
                dispatch('initRayons')
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