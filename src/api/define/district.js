import request from '@/utils/request'

export function districtGetList(){
    return request({
        url:"/defines/districtgetlist",
        method:"get"
    })
}

export function districtGetById(districtId){
    return request({
        url:"/defines/getbyid",
        method:"get",
        params:{districtId}
    })
}

export function districtAdd(data){
    return request({
        url:"/defines/districtadd",
        method:"post",
        data
    })
}

export function districtUpdate(data){
    return request({
        url:"/defines/districtUpdate",
        method:"post",
        data
    })
}

export function districtDelete(data){
    return request({
        url:"/defines/districtDelete",
        method:"post",
        data
    })
}
