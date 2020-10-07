import {stockMovementAdd, stockMovementGetlist,stockMovementGetByIdlist} from "../../../../../api/stock/stockMovement";

const state = {
    stockMovements: [],
    stockMovementsIdList: [],
}

const getters = {
    stockMovementGetlist: state => {
        return state.stockMovements;
    },
   
    stockMovementGetByIdlist: (state) => (stockId) => {
        return state.stockMovementsIdList;
    }
}
const mutations = {
    stockMoUpdate(state, stockMovement) {
        state.stockMovements.push(stockMovement)
    }
}

const actions = {
    initstockMovement({commit}) {
     
        stockMovementGetlist().then(response => {
            // state.stockMovements = response.data;
           

            state.stockMovements = [];
            let data = response.data;
            for(const item in data){
                if(data[item].type == false)
                    data[item].type = "Stok Girişi";
                else
                data[item].type = "Stok Çıkışı";
                if(data[item].stockId>0)
                {
                    let stock=this.getters.stockGetById(data[item].stockId);
                    let unit=this.getters.unitGetById(stock.unitId);
                    if(unit!=null)
                        data[item].unitname=unit.name;
                    else
                    data[item].unitname="Birim Tanımlanmamış"

                    data[item].stock=stock;
                }
                commit("stockMoUpdate", data[item]);
                    

            }
        })
    },
    stockMovementAdd({dispatch, commit, state}, stockMovement) {
        
        const result = stockMovementAdd(stockMovement).then(response => {
            if (response.status == 200) {
                dispatch('initstockMovement');
                return 200;
            } else return 505;
        });
        return result;
    },
    stockMovementGetByIdlist(stockId){
        const result = stockMovementGetByIdlist(stockId).then(response => {
            state.stockMovementsIdList=response.data;
            console.log(response.data);
        })
    }
   
}
export default {
    state,
    getters,
    mutations,
    actions,
}