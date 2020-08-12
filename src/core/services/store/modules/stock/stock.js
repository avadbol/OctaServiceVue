import {stockAdd, stockDelete, stockGetById, stockGetlist, stockUpdate} from "../../../../../api/stock/stock";

const state = {
    stocks: []
}

const getters = {
    stockGetlist: state => {
        return state.stocks;
    },
    stockGet(state) {
        return key = state.stock.filter(element => {
            return element.id == id;
        })
    },
    stockGetById: (state) => (id) => {
        return state.stocks.find(x => x.id == id)
    }
}

const mutations = {
    stockUpdate(state, stock) {
        state.stocks.push(stock)
    }
}

const actions = {
    initStocks({commit}) {
        stockGetlist().then(response => {
            state.stocks = response.data;
            let data = response.data;
            for(const item in data){
                if(data[item].department == null)
                    data[item].department = {Id:0};
                if(data[item].body == null)
                    data[item].body = {Id:0}
                if(data[item].color == null)
                    data[item].color = {Id:0}

            }
        })
    },
    stockAdd({dispatch, commit, state}, stock) {
        const result = stockAdd(stock).then(response => {
            if (response.status == 200) {
                dispatch('initStocks');
                return 200;
            } else return 505;
        });
        return result;
    },
    stockUpdate({dispatch, commit, state}, stock) {
        const result = stockUpdate(stock).then(response => {
            if (response.status == 200) {
                const resultItem = this.getters.stockGetById(stock.id)
                Object.assign(resultItem, stock)
                return 200;
            } else return false;
        })
        return result;
    },
    stockDelete({dispatch, commit, state}, stock) {
        const result = stockDelete(stock).then(response => {
            if (response.status == 200) {
                try {
                    dispatch('initStocks');
                    state.$delete(stock, stock.id)
                } catch {
                    dispatch('initStocks');
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