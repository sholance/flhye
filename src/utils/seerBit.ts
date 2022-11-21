const { Client, Config, StandardCheckout, VerificationService, OrderService, AccountsService } = require("seerbit-nodejs");
const { SeerBitConfig } = require("./config");


const config = new Config(
    {
        publicKey: SeerBitConfig.PUBLIC_KEY,
        secretKey: SeerBitConfig.SECRET_KEY,
        bearerToken: SeerBitConfig.TOKEN
    });

const client = new Client(config);

// export function verifyPayment(paymentReference) {

//     let payUrl = `https://seerbitapi.com/api/v2/payments/query/${paymentReference}`
//     let payOptions = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${seerSecret}}`
//         }
//     };

//     fetch(payUrl, payOptions)
//         .then(res => res.json())
//         .then(json => console.log(json))
//         .catch(err => console.error('error:' + err));

// }
export function bankList() {
    const checkout = new AccountsService(client);

    checkout.BanksList()
        .then(res => console.log(res))
        .catch(e => console.log(e))

}
export function standardCheckout(amount, callbackUrl, country, currency, email, paymentReference) {
    const standard = new StandardCheckout(client);
    const payload = {
        // amount: 100,
        // callbackUrl: "www.testapp.com",
        // country: "NG",
        // currency: "NGN",
        // email: "testmerchant@mailinator.com",
        // paymentReference: Date.now()
        amount: `${amount}`,
        callbackUrl: `${callbackUrl}`,
        country: `${country}`,
        currency: `${currency}`,
        email: `${email}`,
        paymentReference: `${paymentReference}`
    }

    standard.Initialize(payload)
        .then(res => console.log(res))
        .catch(e => console.log(e))
}
export function verifyPayment(paymentReference) {

    const verificationService = new VerificationService(client);
    // const payload = {
    //     paymentReference: "1614510868673"
    // }

    verificationService.Verify(paymentReference)
        .then(res => console.log(res))
        .catch(e => console.log(e))
}

export function createOrderAfterPay(paymentReference, orderId, currency, amount, productId, productDescription) {
    const checkout = new OrderService(client);

    checkout.CreateOrderAfterPayment({
        // "paymentReference": "1614546769962",
        // "orders":[
        //     {
        //         "orderId":"22S789420214623",
        //         "currency":"NGN",
        //         "amount":"500.00",
        //         "productId":"fruits",
        //         "productDescription":"mango"
        //     },
        //     {
        //         "orderId":"1a3sa82748272556947",
        //         "currency":"NGN",
        //         "amount":"900.00",
        //         "productId":"fruits",
        //         "productDescription":"orange"
        //     }
        // ]
        "paymentReference": `${paymentReference}`,
        "orders": [
            {
                "orderId": `${orderId}`,
                "currency": `${currency}`,
                "amount": `${amount}`,
                "productId": `${productId}`,
                "productDescription": `${productDescription}`
            }
            ,
            {
                "orderId": "1a3sa82748272556947",
                "currency": "NGN",
                "amount": "900.00",
                "productId": "fruits",
                "productDescription": "orange"
            }
        ]
    })
        .then(res => console.log(res))
        .catch(e => console.log(e))
}

export function createOrderBeforePay(email, paymentReference, fullName, orderType, mobileNumber, callbackUrl, country, orderId, currency, amount, productId, productDescription) {
    const checkout = new OrderService(client);

    checkout.CreateOrderBeforePayment({
        // "email":"johndoe@gmail.com",
        // "paymentReference": Date.now(),
        // "fullName":"John Doe",
        // "orderType":"BULK_BULK",
        // "mobileNumber":"08000000001",
        // "callbackUrl":"https://yourdomain.com",
        // "country":"NG",
        // "currency":"NGN",
        // "amount":"1400",
        // "orders":[
        //     {
        //         "orderId":"22S789420214623",
        //         "currency":"NGN",
        //         "amount":"500.00",
        //         "productId":"fruits",
        //         "productDescription":"mango"
        //     },
        //     {
        //         "orderId":"1a3sa82748272556947",
        //         "currency":"NGN",
        //         "amount":"900.00",
        //         "productId":"fruits",
        //         "productDescription":"orange"
        //     }
        // ]
        "email": `${email}`,
        "paymentReference": `${paymentReference}`,
        "fullName": `${fullName}`,
        "orderType": `${orderType}`,
        "mobileNumber": `${mobileNumber}`,
        "callbackUrl": `${callbackUrl}`,
        "country": `${country}`,
        "currency": `${currency}`,
        "amount": `${amount}`,
        "orders": [
            {
                "orderId": `${orderId}`,
                "currency": `${currency}`,
                "amount": `${amount}`,
                "productId": `${productId}`,
                "productDescription": `${productDescription}`
            },
            {
                "orderId": "1a3sa82748272556947",
                "currency": "NGN",
                "amount": "900.00",
                "productId": "fruits",
                "productDescription": "orange"
            }
        ]
    })
        .then(res => console.log(res))
        .catch(e => console.log(e))
}

export function getOrder(paymentReference) {
    const checkout = new OrderService(client);
    // { paymentReference: "1614546769962"}
    checkout.GetOrderByReference(paymentReference)
        .then(res => console.log(res))
        .catch(e => console.log(e))
}

export function getOrders() {
    const checkout = new OrderService(client);

    checkout.GetOrders()
        .then(res => console.log(res))
        .catch(e => console.log(e))
}

export function verifySubscription(billingId) {

    let subUrl = `https://seerbitapi.com/api/v2/recurring/billingId/${billingId}`
    let subOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.secretKey}}`
        }
    };

    fetch(subUrl, subOptions)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}