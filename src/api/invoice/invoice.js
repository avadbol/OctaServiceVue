import request from '@/utils/request'

export function invoiceGetList() {
    return request({
        url: "/defines/invoicegetlist",
        method: "get"
    })
}

export function invoiceGetById(invoiceId) {
    return request({
        url: "/defines/getbyid",
        method: "get",
        params: { invoiceId }
    })
}

export function invoiceAdd(data) {
    return request({
        url: "/defines/invoiceadd",
        method: "post",
        data
    })
}

export function invoiceUpdate(data) {
    return request({
        url: "/defines/invoiceUpdate",
        method: "post",
        data
    })
}

export function invoiceDelete(data) {
    return request({
        url: "/defines/invoiceDelete",
        method: "post",
        data
    })
}