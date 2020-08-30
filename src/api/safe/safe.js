import request from '@/utils/request'

export function safeGetlist() {
    return request({
        url: "/safe/safegetlist",
        method: "get"
    })
}

export function safeGetById(safeById) {
    return request({
        url: "/safe/getbyid",
        method: "get",
        params: { safeById }
    })
}

export function safeAdd(data) {
    console.log(data)
    return request({
        url: "/safe/safeadd",
        method: "post",
        data
    })
}

export function safeUpdate(data) {
    return request({
        url: "/safe/safeupdate",
        method: "post",
        data
    })
}

export function safeDelete(data) {
    return request({
        url: "/Safe/safedelete",
        method: "post",
        data
    })
}