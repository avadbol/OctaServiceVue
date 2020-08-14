import request from '@/utils/request'

export function categoryGetList(){
    return request({
        url:"/defines/categorygetlist",
        method:"get"
    })
}

export function categoryGetById(categoryId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{categoryId}
    })
}

export function categoryAdd(data){
    return request({
        url:"/defines/categoryadd",
        method:"post",
        data
    })
}

export function categoryUpdate(data){
    return request({
        url:"/defines/categoryUpdate",
        method:"post",
        data
    })
}

export function categoryDelete(data){
    return request({
        url:"/defines/categoryDelete",
        method:"post",
        data
    })
}

export function subcategoryGetList(){
    return request({
        url:"/defines/subcategorygetlist",
        method:"get"
    })
}

export function subcategoryGetById(subcategoryId){
    return request({
        url:"/defines/subcategorygetbyid",
        method:"get",
        params:{subcategoryId}
    })
}

export function subcategoryAdd(data){
    return request({
        url:"/defines/subcategoryadd",
        method:"post",
        data
    })
}

export function subcategoryUpdate(data){
    return request({
        url:"/defines/subcategoryUpdate",
        method:"post",
        data
    })
}

export function subcategoryDelete(data){
    return request({
        url:"/defines/subcategoryDelete",
        method:"post",
        data
    })
}