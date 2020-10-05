import request from '@/utils/request'

export function stockMovementGetlist(){
    return request({
        url:"stocks/getliststockmovement",
        method:"get"
    })
}

export function stockMovementAdd(data){
    return request({
        url:"/stocks/stockmovementadd",
        method:"post",
        data
    })
}
