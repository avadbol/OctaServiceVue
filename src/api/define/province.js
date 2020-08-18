import request from '@/utils/request'

export function provinceGetList(){
    return request({
        url:"/defines/provincegetlist",
        method:"get"
    })
}

export function provinceGetById(provinceId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{provinceId}
    })
}

export function provinceAdd(data){
    return request({
        url:"/defines/provinceadd",
        method:"post",
        data
    })
}

export function provinceUpdate(data){
    return request({
        url:"/defines/provinceUpdate",
        method:"post",
        data
    })
}

export function provinceDelete(data){
    return request({
        url:"/defines/provinceDelete",
        method:"post",
        data
    })
}
