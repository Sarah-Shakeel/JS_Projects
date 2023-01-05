//Making an http request without importing library (without using npm module)
const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=38f69e42a1607377d86f465ae91f214b&query=40,-75';

const request= http.request(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
        data = data + chunk.toString() ;
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An Error', error);
})

request.end();