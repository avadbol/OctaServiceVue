import request from '@/utils/request'

export function groupGetList(){
    return request({
        url:"/defines/groupgetlist",
        method:"get"
    })
}

export function groupGetById(groupId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{groupId}
    })
}

export function groupAdd(data){
    return request({
        url:"/defines/groupadd",
        method:"post",
        data
    })
}

export function groupUpdate(data){
    return request({
        url:"/defines/groupUpdate",
        method:"post",
        data
    })
}

export function groupDelete(data){
    return request({
        url:"/defines/groupDelete",
        method:"post",
        data
    })
}