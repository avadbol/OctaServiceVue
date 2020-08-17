const stockDto  = {
    data:function () {
        return{
            stock:{
                id:0,
                barcode: null,
                mainBarcode: null,
                name: null,
                widthName: null,
                pCode: null,
                storageCode: 0,
                search: null,
                department: {
                    type:Object,
                    default:{id:0},
                },
                buyingKdv: 0,
                mainGroup:  {
                    type:Object,
                    default:{id:0},
                },
                subGroup:  {
                    type:Object,
                    default:{id:0},
                },
                privateCode: 0,
                manufacturerCode: null,
                shelfLife: 0,
                category: {
                    type:Object,
                    default:{id:0},
                },
                subCategory: {
                    type:Object,
                    default:{id:0},
                },
                color: {
                    type:Object,
                    default:{id:0},
                },
                body: {
                    type:Object,
                    default:{id:0},
                },
                manufacturer: null,
                vendor: null,
                scalesCode: null,
                rateOfProfit: 0,
                width: 0,
                height: 0,
                size: 0,
                kg: 0,
            }
        }
    }
}

export default stockDto