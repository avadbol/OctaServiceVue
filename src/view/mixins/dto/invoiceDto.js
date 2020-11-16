updateconst InvoiceDto = {
    data() {
        return {
            invoice: {
                id: 0,
                InvoiceType: null,
                DocumentCode: null,
                Store: 0,
                StoreId: 0,
                InvoiceSherry: null,
                InvoiceNumber: null,
                // InvoiceDate: null,
                Seller: null,
                SellerId: 0,
                DocumentNumber: null,
                CariId: 0,
                CariName: null,
                ExchangeName: null,
                ExchangeValue: 0,
                TermDay: 0,
                // TermFinishDate: null,
                DocumentTrackingNumber: null,
                InvoiceType: null,
                TotalSub: 0,
                TotalKdv: 0,
                TotalDiscount: 0,
                Total: 0,
                Desc: null
            }
        }
    }
}

export default InvoiceDto