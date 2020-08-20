import request from '@/utils/request'

export function cariGroupGetList(){
    return request({
        url:"/cari/carigroupgetlist",
        method:"get"
    })
}

export function cariGroupGetById(groupId){
    return request({
        url:"/cari/carigroupgetbyid",
        method:"get",
        params:{groupId}
    })
}

export function cariGroupAdd(data){
    return request({
        url:"/cari/carigroupadd",
        method:"post",
        data
    })
}

export function cariGroupUpdate(data){
    return request({
        url:"/cari/cariGroupUpdate",
        method:"post",
        data
    })
}

export function cariGroupDelete(data){
    return request({
        url:"/cari/cariGroupDelete",
        method:"post",
        data
    })
}

////////////
export function cariSubGroupGetList(){
    return request({
        url:"/cari/cariSubgroupgetlist",
        method:"get"
    })
}

export function cariSubGroupGetById(groupId){
    return request({
        url:"/cari/cariSubgroupgetbyid",
        method:"get",
        params:{groupId}
    })
}

export function cariSubGroupAdd(data){
    return request({
        url:"/cari/carisubgroupadd",
        method:"post",
        data
    })
}

export function cariSubGroupUpdate(data){
    return request({
        url:"/cari/carisubgroupupdate",
        method:"post",
        data
    })
}

export function cariSubGroupDelete(data){
    return request({
        url:"/cari/carisubgroupdelete",
        method:"post",
        data
    })
}