import request from '@/utils/request'

export function cariGetlist(){
    return request({
        url:"/Cari/carigetlist",
        method:"get"
    })
}

export function cariGetById(cariById){
    return request({
        url:"/Cari/carigetbyid",
        method:"get",
        params:{cariById}
    })
}

export function cariAdd(data){
    console.log(data)
    return request({
        url:"/cari/cariadd",
        method:"post",
        data
    })
}

export function cariUpdate(data){
    return request({
        url:"/Cari/cariupdate",
        method:"post",
        data
    })
}

export function cariDelete(data){
    return request({
        url:"/Cari/caridelete",
        method:"post",
        data
    })
}