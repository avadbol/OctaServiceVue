import request from '@/utils/request'

export function carireceiverGetList(){
    return request({
        url:"/cari/carireceivergetlist",
        method:"get"
    })
}

export function carireceiverGetById(carireceiverId){
    return request({
        url:"/cari/carireceivergetbyid",
        method:"get",
        params:{carireceiverId}
    })
}

export function carireceiverAdd(data){
    console.log(data);
    return request({
        url:"/cari/carireceiveradd",
        method:"post",
        data
    })
}

export function carireceiverUpdate(data){
    return request({
        url:"/cari/carireceiverUpdate",
        method:"post",
        data
    })
}

export function carireceiverDelete(data){
    return request({
        url:"/cari/carireceiverDelete",
        method:"post",
        data
    })
}