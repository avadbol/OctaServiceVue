import request from '@/utils/request'

export function carisellerGetList(){
    return request({
        url:"/cari/carisellergetlist",
        method:"get"
    })
}

export function carisellerGetById(carisellerId){
    return request({
        url:"/cari/carisellergetbyid",
        method:"get",
        params:{carisellerId}
    })
}

export function carisellerAdd(data){
    console.log(data);
    return request({
        url:"/cari/cariselleradd",
        method:"post",
        data
    })
}

export function carisellerUpdate(data){
    return request({
        url:"/cari/carisellerUpdate",
        method:"post",
        data
    })
}

export function carisellerDelete(data){
    return request({
        url:"/cari/carisellerDelete",
        method:"post",
        data
    })
}