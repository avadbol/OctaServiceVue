import request from '@/utils/request'

export function departmentGetList(){
    return request({
        url:"/defines/departmengetlist",
        method:"get"
    })
}

export function departmentGetById(departmenId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{departmenId}
    })
}

export function departmentAdd(data){
    return request({
        url:"/defines/departmenadd",
        method:"post",
        data
    })
}

export function departmentUpdate(data){
    return request({
        url:"/defines/departmenupdate",
        method:"post",
        data
    })
}

export function departmentDelete(data){
    return request({
        url:"/defines/departmendelete",
        method:"post",
        data
    })
}