import request from '@/utils/request'

export function stockGetlist(){
    return request({
        url:"/stocks/getlist",
        method:"get"
    })
}

export function stockGetById(stockById){
    return request({
        url:"/stocks/getbyid",
        method:"get",
        params:{stockById}
    })
}

export function stockAdd(data){
    return request({
        url:"/Stocks/add",
        method:"post",
        data
    })
}

export function stockUpdate(data){
    return request({
        url:"/stocks/update",
        method:"post",
        data
    })
}

export function stockDelete(data){
    return request({
        url:"/stocks/delete",
        method:"post",
        data
    })
}