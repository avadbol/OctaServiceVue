import request from '@/utils/request'

export function storageGetList(){
    return request({
        url:"/defines/storagegetlist",
        method:"get"
    })
}

export function storageGetById(storageId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{storageId}
    })
}

export function storageAdd(data){
    return request({
        url:"/defines/storageadd",
        method:"post",
        data
    })
}

export function storageUpdate(data){
    return request({
        url:"/defines/storageUpdate",
        method:"post",
        data
    })
}

export function storageDelete(data){
    return request({
        url:"/defines/storageDelete",
        method:"post",
        data
    })
}