import request from '@/utils/request'

export function exchangeGetList(){
    return request({
        url:"/defines/exchangegetlist",
        method:"get"
    })
}

export function exchangeGetById(exchangeId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{exchangeId}
    })
}

export function exchangeAdd(data){
    return request({
        url:"/defines/exchangeadd",
        method:"post",
        data
    })
}

export function exchangeUpdate(data){
    return request({
        url:"/defines/exchangeUpdate",
        method:"post",
        data
    })
}

export function exchangeDelete(data){
    return request({
        url:"/defines/exchangeDelete",
        method:"post",
        data
    })
}