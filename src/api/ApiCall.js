//From Frankfurter API
export let ShowRateAPI = (BaseCurrency) => {
    return fetch(`https://api.frankfurter.app/latest?from=${BaseCurrency}`)
        .then((data) => data.json())
        .then((data) => {
            return data;
        });
};

export let ConvertAPI = (BaseCurrency, TargetCurrency, Amount) => {
    const host = "api.frankfurter.app";
    return fetch(
            `https://${host}/latest?amount=${Amount}&from=${BaseCurrency}&to=${TargetCurrency}`
        )
        .then((val) => val.json())
        .then((val) => {
            return Object.values(val.rates)[0];
        });
};

//From Exchange rate api
// export let ConvertAPI = (BaseCurrency, TargetCurrency, Amount) => {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "o8HZ5jz26B6cYSrzzJ5JCMIdRDtoavZY");
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers: myHeaders
//     };
//     return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${TargetCurrency}&from=${BaseCurrency}&amount=${Amount}`, requestOptions)
//         .then(val => val.json())
//         .then((val) => {
//             console.log("amount :", Object.values(val)[4])
//             return Object.values(val)[4];
//         });

// };

// export let ShowRateAPI = (BaseCurrency) => {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "o8HZ5jz26B6cYSrzzJ5JCMIdRDtoavZY");

//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers: myHeaders
//     };
//     return fetch(`https://api.apilayer.com/exchangerates_data/latest?&base=${BaseCurrency}`, requestOptions)
//         .then(val => val.json())
//         .then((val) => {
//             console.log("rate :", val)
//             return val;
//         });
// };