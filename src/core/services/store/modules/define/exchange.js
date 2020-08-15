import {exchangeAdd,exchangeDelete,exchangeGetById,exchangeGetList,exchangeUpdate} from "../../../../../api/define/exchange";

const state = {
    exchanges: []
}

const getters = {
    exchangeGetlist: state => {
        return state.exchanges;
    },
    exchangeGet: state => {
        return key = state.exchanges.filter(element => {
            return element.key == key;
        })
    },
    exchangeGetById: (state) => (id) => {
        return state.exchanges.find(x => x.id == id)
    }
}

const mutations = {
    exchangeUpdate(state, payload) {
        state.exchanges.push(payload)
    }
}

const actions = {
    initExchanges({commit}) {
        exchangeGetList().then(response => {
            state.exchanges = response.data;
        })
    },
    exchangeAdd({dispatch, commit, state}, exchange) {
        const result = exchangeAdd(exchange).then(response => {
            if (response.status == 200) {
                dispatch('initExchanges');
                return 200;
            } else return 505;
        });
        return result;
    },
    exchangeUpdate({dispatch, commit, state}, exchange) {
        const result = exchangeUpdate(exchange).then(response => {
            if (response.status == 200) {
                dispatch('initExchanges')
                return 200;
            } else return false;
        })
        return result;
    },
    exchangeDelete({dispatch, commit, state}, exchange) {
        const result = exchangeDelete(exchange).then(response => {
            if (response.status == 200) {
                dispatch('initExchanges')
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