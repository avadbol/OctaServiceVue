import request from '@/utils/request'

export function rayonGetList(){
    return request({
        url:"/defines/rayongetlist",
        method:"get"
    })
}

export function rayonGetById(rayonId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{rayonId}
    })
}

export function rayonAdd(data){
    return request({
        url:"/defines/rayonadd",
        method:"post",
        data
    })
}

export function rayonUpdate(data){
    return request({
        url:"/defines/rayonUpdate",
        method:"post",
        data
    })
}

export function rayonDelete(data){
    return request({
        url:"/defines/rayonDelete",
        method:"post",
        data
    })
}