import request from '@/utils/request'

export function bodyGetList(){
    return request({
        url:"/defines/bodygetlist",
        method:"get"
    })
}

export function bodyGetById(bodyId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{bodyId}
    })
}

export function bodyAdd(data){
    return request({
        url:"/defines/bodyadd",
        method:"post",
        data
    })
}

export function bodyUpdate(data){
    return request({
        url:"/defines/bodyUpdate",
        method:"post",
        data
    })
}

export function bodyDelete(data){
    return request({
        url:"/defines/bodyDelete",
        method:"post",
        data
    })
}