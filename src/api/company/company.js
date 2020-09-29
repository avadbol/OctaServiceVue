import request from '@/utils/request'

export function companyGetlist(){
    return request({
        url:"/Company/companygetlist",
        method:"get"
    })
}
export function companyGetById(companyById){
    return request({
        url:"/Company/companygetbyid",
        method:"get",
        params:{companyById}
    })
}
export function companyAdd(data){
    return request({
        url:"/company/companyadd",
        method:"post",
        data
    })
}
export function companyUpdate(data){
    return request({
        url:"/Company/companyupdate",
        method:"post",
        data
    })
}
export function companyDelete(data){
    return request({
        url:"/Company/companydelete",
        method:"post",
        data
    })
}