import {companyGetById,companyGetlist,companyAdd,companyDelete,companyUpdate} from "../../../../../api/company/company"

const state = {
    company: []
}

const getters = {
    companyGetlist: state => {
        return state.company;
    },
    companyGet(state) {
        return key = state.company.filter(element => {
            return element.id == id;
        })
    },
    companyGetById: (state) => (id) => {
        return state.company.find(x => x.id == id)
    }
}

const mutations = {
    companyUpdate(state, payload) {
        state.company.push(payload)
    }
}

const actions = {
    initCompany({commit}) {
        companyGetlist().then(response => {
            state.company = response.data;
        })
    },
    companyAdd({dispatch, commit, state}, payload) {
        const result = companyAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCompany');
                return 200;
            } else return 505;
        });
        return result;
    },
    companyUpdate({dispatch, commit, state}, payload) {
        const result = companyUpdate(payload).then(response => {
            if (response.status == 200) {
                const resultItem = this.getters.companyGetById(company.id)
                Object.assign(resultItem, company)
                return 200;
            } else return false;
        })
        return result;
    },
    companyDelete({dispatch, commit, state}, payload) {
        const result = companyDelete(payload).then(response => {
            if (response.status == 200) {
                try {
                    dispatch('initCompany');
                    state.$delete(company, company.id)
                } catch {
                    dispatch('initCompany');
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