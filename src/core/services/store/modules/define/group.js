import {groupAdd, groupDelete,groupGetById,groupGetList,groupUpdate,subGroupAdd,subGroupDelete,subGroupGetById,subGroupGetList,subGroupUpdate} from "../../../../../api/define/group";

const state = {
    groups: [],
    subgroups:[]
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
    },
    subgroupGetlist: state => {
        return state.subgroups;
    },
    subgroupGet: state => {
        return key = state.subgroups.filter(element => {
            return element.key == key;
        })
    },
    subgroupGetById: (state) => (id) => {
        return state.subgroups.find(x => x.id == id)
    }
}

const mutations = {
    groupUpdate(state, group) {
        state.groups.push(group)
    },
    subgroupUpdate(state, group) {
        state.subgroups.push(group)
    }
}

const actions = {
    initGroups({commit}) {
        groupGetList().then(response => {
            state.groups = response.data;
            // let data = response.data;
            // for (let key in data) {
            //     data[key].key = key;
            //     commit("groupUpdate", data[key])
            // }
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
    },
    initSubGroups({commit}) {
        subGroupGetList().then(response => {
            state.subgroups = [];

            let data = response.data;
            for (let item in data) {
                let resultGroupId = data[item].groupId;
                if(resultGroupId>0)
                {
                    let group =  this.getters.groupGetById(data[item].groupId);
                    data[item].groupName = group.name;
                }
                else
                    data[item].groupName = "Seçilmemiş";
                commit("subgroupUpdate", data[item])
            }
        })
    },
    subgroupAdd({dispatch, commit, state}, subgroup) {
        const result = subGroupAdd(subgroup).then(response => {
            if (response.status == 200) {
                dispatch('initSubGroups');
                return 200;
            } else return 505;
        });
        return result;
    },
    subgroupUpdate({dispatch, commit, state}, subgroup) {
        const result = subGroupUpdate(subgroup).then(response => {
            if (response.status == 200) {
                dispatch('initSubGroups')
                return 200;
            } else return false;
        })
        return result;
    },
    subgroupDelete({dispatch, commit, state}, group) {
        const result = subGroupDelete(group).then(response => {
            if (response.status == 200) {
                dispatch('initSubGroups')
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