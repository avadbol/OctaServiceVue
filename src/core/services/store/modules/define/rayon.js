import {rayonAdd,rayonDelete,rayonGetList,rayonUpdate,rayonGetById} from "../../../../../api/define/rayon";

const state = {
    rayons:[]
}

const getters ={
    rayonGetlist: state => {
        return state.rayons;
    },
    rayonGet:state => {
        return key = state.rayon.filter(element => {
            return element.key == key;
        })
    },
    rayonGetById: (state) => (id) => {
        return state.rayons.find(x=> x.id == id)
    }
}

const mutations = {
    rayonUpdate(state, rayon){
        state.rayons.push(rayon)
    }
}

const actions = {
    initRayons({commit}){
        rayonGetList().then(response => {
            this.rayons = []
            let data = response.data;
            for(let key in data){
                data[key].key = key;
                commit("rayonUpdate",data[key])
            }
        })
    },
    rayonAdd({dispatch, commit,state},rayon){
        rayonAdd(rayon).then(response => {
            if(response.status == 200){
                dispatch("initRayons")
                return 200;
            }
        });
        return false;
    },
    rayonUpdate({dispatch, commit,state}, rayon){
        return rayonUpdate(rayon);
    },
    rayonDelete({dispatch,commit,state},rayon){
        return rayonDelete(rayon);
    }
}

export default{
    state,
    getters,
    mutations,
    actions,
}