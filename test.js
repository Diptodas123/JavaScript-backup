const p = async () => {
    let options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "apikey": "59768b92e90d1bb136d5026f7602ebf5",
        },
    }
    let address1 = "11650 ANTWERP AVE";
    let address2 = "LOS ANGELES CA";
    let url = `https://api.gateway.attomdata.com/propertyapi/v1.0.0/avm/detail?address1=${encodeURIComponent(address1)}&address2=${encodeURIComponent(address2)}`;

    let response = await fetch(url, options);
    return response.json();
}

p()
    .then((value) => {
        console.log(value);
    })
