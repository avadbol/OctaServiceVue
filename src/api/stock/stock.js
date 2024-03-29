import request from '@/utils/request'

export function stockGetlist(){
    return request({
        url:"/stocks/getlistDto",
        method:"get"
    })
}

export function stockGetById(stockById){
    return request({
        url:"/stocks/getbyid",
        method:"get",
        params:{stockById}
    })
}

export function stockAdd(data){
    console.log(data)
    return request({
        url:"/stocks/stockadd",
        method:"post",
        data
    })
}

export function stockUpdate(data){
    return request({
        url:"/stocks/update",
        method:"post",
        data
    })
}

export function stockDelete(data){
    console.log("apiden geliyor şuanda")
    console.log(data);
    return request({
        url:"/stocks/delete",
        method:"post",
        data
    })
}