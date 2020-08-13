import request from '@/utils/request'

export function groupGetList(){
    return request({
        url:"/defines/groupgetlist",
        method:"get"
    })
}

export function groupGetById(groupId){
    return request({
        url:"/defines/groupgetbyid",
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

////////////
export function subGroupGetList(){
    return request({
        url:"/defines/subgroupgetlist",
        method:"get"
    })
}

export function subGroupGetById(groupId){
    return request({
        url:"/defines/subgroupgetbyid",
        method:"get",
        params:{groupId}
    })
}

export function subGroupAdd(data){
    return request({
        url:"/defines/subgroupadd",
        method:"post",
        data
    })
}

export function subGroupUpdate(data){
    return request({
        url:"/defines/subgroupupdate",
        method:"post",
        data
    })
}

export function subGroupDelete(data){
    return request({
        url:"/defines/subgroupdelete",
        method:"post",
        data
    })
}