import {departmentAdd,departmentDelete,departmentGetById,departmentGetList,departmentUpdate} from "../../../../../api/define/department";

const state = {
    departments: []
}

const getters = {
    departmentGetlist: state => {
        return state.departments;
    },
    departmentGet: state => {
        return key = state.departments.filter(element => {
            return element.key == key;
        })
    },
    departmentGetById: (state) => (id) => {
        return state.departments.find(x => x.id == id)
    }
}

const mutations = {
    departmentUpdate(state, department) {
        state.departments.push(department)
    }
}

const actions = {
    initDepartments({commit}) {
        departmentGetList().then(response => {
            state.departments = [];
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("departmentUpdate", data[key])
            }
        })
    },
    departmentAdd({dispatch, commit, state}, department) {
        const result = departmentAdd(department).then(response => {
            if (response.status == 200) {
                dispatch('initDepartments');
                return 200;
            } else return 505;
        });
        return result;
    },
    departmentUpdate({dispatch, commit, state}, department) {
        const result = departmentUpdate(department).then(response => {
            if (response.status == 200) {
                dispatch('initDepartments')
                return 200;
            } else return false;
        })
        return result;
    },
    departmentDelete({dispatch, commit, state}, department) {
        const result = departmentDelete(department).then(response => {
            if (response.status == 200) {
                dispatch('initDepartments')
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