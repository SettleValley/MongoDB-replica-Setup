export const SuperMarketSchema = {
    name: "SuperMarket",
    columns: {
        zipcode: {
            type: "Int32",
            required: true
        },
        supermarket_type:{
            type: 'String',
            required: true
        },
        market_name: {
            type: 'String',
            required: true
        },
        property_address:{
            type:'String',
            required: true
        }
    },
}