import { invoiceAdd, invoiceUpdate, invoiceDelete, invoiceGetById } from "../../../../../api/invoice/invoice"
const state = {
    invoice: []
}

const getters = {
    invoiceGetlist: state => {
        return state.invoice;
    },
    invoiceGetById: (state) => (id) => {
        return state.invoice.find(x => x.id == id)
    }
}

const mutations = {
    inoviceUpdate(state, payload) {
        state.invoice.push(payload);
    }
}

const actions = {
    initInvoice({ commit }) {
        invoiceGetList().then(response => {
            state.invoice = []
            let data = response.data;
            for (let key in data) {
                data[key].key = key;
                commit("invoiceUpdate", data[key])
            }
        })
    },
    invoiceAdd({ dispatch, commit, state }, invoice) {
        const result = invoiceAdd(invoice).then(response => {
            if (response.status == 200) {
                dispatch("initInvoice")
                return 200;
            } else return 505;
        })
    },
    invoiceUpdate({ dispatch, commit, state }, invoice) {
        const result = invoiceUpdate(invoice).then(response => {
            if (response.status == 200) {
                dispatch("initInvoice")
                return 200;
            } else return 505;
        })
    },
    invoiceDelete({ dispatch, commit, state }, invoice) {
        const result = invoiceDelete(invoice).then(response => {
            if (response.status == 200) {
                dispatch("initInvoice")
                return 200;
            } else return 505;
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}