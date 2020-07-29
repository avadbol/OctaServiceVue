import {groupAdd, groupDelete,groupGetById,groupGetList,groupUpdate} from "../../../../../api/define/group";

const state = {
    groups: []
}

const getters = {
    groupGetlist: state => {
        return state.groups;
    },
    groupGet: state => {
        return key = state.groups.filter(element => {
            return element.key == key;
        })
    },
    groupGetById: (state) => (id) => {
        return state.groups.find(x => x.id == id)
    }
}

const mutations = {
    groupUpdate(state, group) {
        state.groups.push(group)
    }
}

const actions = {
    initGroups({commit}) {
        groupGetList().then(response => {
            state.groups = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("groupUpdate", data[key])
            }
        })
    },
    groupAdd({dispatch, commit, state}, group) {
        const result = groupAdd(group).then(response => {
            if (response.status == 200) {
                dispatch('initGroups');
                return 200;
            } else return 505;
        });
        return result;
    },
    groupUpdate({dispatch, commit, state}, group) {
        const result = groupUpdate(group).then(response => {
            if (response.status == 200) {
                dispatch('initGroups')
                return 200;
            } else return false;
        })
        return result;
    },
    groupDelete({dispatch, commit, state}, group) {
        const result = groupDelete(group).then(response => {
            if (response.status == 200) {
                dispatch('initGroups')
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