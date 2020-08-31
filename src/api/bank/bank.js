import request from '@/utils/request'

export function bankGetlist(){
    return request({
        url:"/Bank/bankgetlist",
        method:"get"
    })
}

export function bankGetById(bankById){
    return request({
        url:"/Bank/bankgetbyid",
        method:"get",
        params:{bankById}
    })
}

export function bankAdd(data){
    console.log(data)
    return request({
        url:"/Bank/bankadd",
        method:"post",
        data
    })
}

export function bankUpdate(data){
    return request({
        url:"/Bank/bankupdate",
        method:"post",
        data
    })
}

export function bankDelete(data){
    return request({
        url:"/Bank/bankdelete",
        method:"post",
        data
    })
}