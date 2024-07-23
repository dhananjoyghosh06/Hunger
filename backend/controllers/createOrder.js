const createOrder = async(req,res) =>{
    var request = {
        "order_amount": 1,
        "order_currency": "INR",
        "order_id": "order_34692745",
        "customer_details": {
            "customer_id": "walterwNrcMi",
            "customer_phone": "9999999999"
        },
        "order_meta": {
            "return_url": "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}"
        }
    };
    Cashfree.PGCreateOrder("2022-09-01", request).then((response) => {
        console.log('Order Created successfully:',response.data)
    }).catch((error) => {
        console.error('Error:', error.response.data.message);
    });
}