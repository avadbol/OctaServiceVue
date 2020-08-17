import request from '@/utils/request'

export function countryGetList(){
    return request({
        url:"/defines/countrygetlist",
        method:"get"
    })
}

export function countryGetById(countryId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{countryId}
    })
}

export function countryAdd(data){
    return request({
        url:"/defines/countryadd",
        method:"post",
        data
    })
}

export function countryUpdate(data){
    return request({
        url:"/defines/countryUpdate",
        method:"post",
        data
    })
}

export function countryDelete(data){
    return request({
        url:"/defines/countryDelete",
        method:"post",
        data
    })
}
