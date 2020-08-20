import {cariGroupAdd,cariGroupDelete,cariGroupGetById,cariGroupGetList,cariGroupUpdate,cariSubGroupAdd,cariSubGroupDelete,cariSubGroupGetById,cariSubGroupGetList,cariSubGroupUpdate} from "../../../../../api/define/carigroup";

const state = {
    carigroups: [],
    carisubgroups:[]
}

const getters = {
    carigroupGetlist: state => {
        return state.carigroups;
    },
    carigroupGet: state => {
        return key = state.carigroups.filter(element => {
            return element.key == key;
        })
    },
    carigroupGetById: (state) => (id) => {
        return state.carigroups.find(x => x.id == id)
    },
    carigubgroupGetlist: state => {
        return state.carisubgroups;
    },
    carisubgroupGet: state => {
        return key = state.carisubgroups.filter(element => {
            return element.key == key;
        })
    },
    carisubgroupGetById: (state) => (id) => {
        return state.carisubgroups.find(x => x.id == id)
    }
}

const mutations = {
    carigroupUpdate(state, group) {
        state.carigroups.push(group)
    },
    carisubgroupUpdate(state, group) {
        state.carisubgroups.push(group)
    }
}

const actions = {
    initCariGroup({commit}) {
        cariGroupGetList().then(response => {
            state.carigroups = response.data;
            // let data = response.data;
            // for (let key in data) {
            //     data[key].key = key;
            //     commit("groupUpdate", data[key])
            // }
        })
    },
    carigroupAdd({dispatch, commit, state}, payload) {
        const result = cariGroupAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCariGroup');
                return 200;
            } else return 505;
        });
        return result;
    },
    carigroupUpdate({dispatch, commit, state}, payload) {
        const result = cariGroupUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCariGroup')
                return 200;
            } else return false;
        })
        return result;
    },
    carigroupDelete({dispatch, commit, state}, payload) {
        const result = cariGroupDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCariGroup')
                return 200;
            } else return false;
        })
        return result;
    },
    initSubCariGroup({commit}) {
        cariSubGroupGetList().then(response => {
            state.carisubgroups = response.data

            // let data = response.data;
            // for (let item in data) {
            //     let resultGroupId = data[item].groupId;
            //     if(resultGroupId>0)
            //     {
            //         let group =  this.getters.groupGetById(data[item].groupId);
            //         data[item].groupName = group.name;
            //     }
            //     else
            //         data[item].groupName = "Seçilmemiş";
            //     commit("subgroupUpdate", data[item])
            // }
        })
    },
    carisubgroupAdd({dispatch, commit, state}, payload) {
        const result = cariSubGroupAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initSubCariGroup');
                return 200;
            } else return 505;
        });
        return result;
    },
    cariSubgroupUpdate({dispatch, commit, state}, payload) {
        const result = cariSubGroupUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initSubCariGroup')
                return 200;
            } else return false;
        })
        return result;
    },
    cariSubgroupDelete({dispatch, commit, state}, payload) {
        const result = cariSubGroupDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initSubCariGroup')
                return 200;
            } else return false;
        })
        return result;
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}