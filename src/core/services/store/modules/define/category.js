import {categoryAdd,categoryDelete,categoryGetById,categoryGetList,categoryUpdate,subcategoryUpdate,subcategoryGetList,subcategoryGetById,subcategoryDelete,subcategoryAdd} from "../../../../../api/define/category";

const state = {
    category: [],
    subcategory:[]
}

const getters = {
    categoryGetlist: state => {
        return state.category;
    },
    categoryGet: state => {
        return key = state.category.filter(element => {
            return element.key == key;
        })
    },
    categoryGetById: (state) => (id) => {
        return state.category.find(x => x.id == id)
    },
    subcategoryGetlist: state => {
        return state.subcategory;
    },
    subcategoryGet: state => {
        return key = state.subcategory.filter(element => {
            return element.key == key;
        })
    },
    subcategoryGetById: (state) => (id) => {
        return state.subcategory.find(x => x.id == id)
    }
}

const mutations = {
    categoryUpdate(state, payload) {
        state.category.push(payload)
    },
    subcategoryUpdate(state, payload) {
        state.subcategory.push(payload)
    }
}

const actions = {
    initCategory({commit}) {
        categoryGetList().then(response => {
            state.category = response.data;
        })
    },
    categoryAdd({dispatch, commit, state}, payload) {
        const result = categoryAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCategory');
                return 200;
            } else return 505;
        });
        return result;
    },
    categoryUpdate({dispatch, commit, state}, payload) {
        const result = categoryUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCategory')
                return 200;
            } else return false;
        })
        return result;
    },
    categoryDelete({dispatch, commit, state}, payload) {
        const result = categoryDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initCategory')
                return 200;
            } else return false;
        })
        return result;
    },

    initsubCategory({commit}) {
        subcategoryGetList().then(response => {
            state.subcategory = [];
            let data = response.data;
            for (let item in data) {
                let resultId = data[item].categoryId;
                if(resultId>0)
                {
                    let category =  this.getters.categoryGetById(data[item].categoryId);
                    data[item].categoryname = category.name;
                }
                else
                    data[item].categoryname = "Seçilmemiş";
                commit("subcategoryUpdate", data[item])
            }
        })
    },
    subcategoryAdd({dispatch, commit, state}, payload) {
        const result = subcategoryAdd(payload).then(response => {
            if (response.status == 200) {
                dispatch('initsubCategory');
                return 200;
            } else return 505;
        });
        return result;
    },
    subcategoryUpdate({dispatch, commit, state}, payload) {
        const result = subcategoryUpdate(payload).then(response => {
            if (response.status == 200) {
                dispatch('initsubCategory')
                return 200;
            } else return false;
        })
        return result;
    },
    subcategoryDelete({dispatch, commit, state}, payload) {
        const result = subcategoryDelete(payload).then(response => {
            if (response.status == 200) {
                dispatch('initsubCategory')
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