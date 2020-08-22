import request from '@/utils/request'

export function carisellerGetList(){
    return request({
        url:"/defines/carisellergetlist",
        method:"get"
    })
}

export function carisellerGetById(carisellerId){
    return request({
        url:"/defines/carisellergetbyid",
        method:"get",
        params:{carisellerId}
    })
}

export function carisellerAdd(data){
    console.log(data);
    return request({
        url:"/defines/cariselleradd",
        method:"post",
        data
    })
}

export function carisellerUpdate(data){
    return request({
        url:"/defines/carisellerUpdate",
        method:"post",
        data
    })
}

export function carisellerDelete(data){
    return request({
        url:"/defines/carisellerDelete",
        method:"post",
        data
    })
}