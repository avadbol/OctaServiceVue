import request from '@/utils/request'

export function unitGetList(){
    return request({
        url:"/defines/unitgetlist",
        method:"get"
    })
}

export function unitGetById(unitId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{unitId}
    })
}

export function unitAdd(data){
    return request({
        url:"/defines/unitadd",
        method:"post",
        data
    })
}

export function unitUpdate(data){
    return request({
        url:"/defines/unitUpdate",
        method:"post",
        data
    })
}

export function unitDelete(data){
    return request({
        url:"/defines/unitDelete",
        method:"post",
        data
    })
}