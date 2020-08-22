import request from '@/utils/request'

export function colorGetList(){
    return request({
        url:"/defines/colorgetlist",
        method:"get"
    })
}

export function colorGetById(colorId){
    return request({
        url:"/defines/colorgetbyid",
        method:"get",
        params:{colorId}
    })
}

export function colorAdd(data){
    return request({
        url:"/defines/coloradd",
        method:"post",
        data
    })
}

export function colorUpdate(data){
    return request({
        url:"/defines/colorUpdate",
        method:"post",
        data
    })
}

export function colorDelete(data){
    return request({
        url:"/defines/colorDelete",
        method:"post",
        data
    })
}