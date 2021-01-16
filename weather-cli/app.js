// http://api.weatherstack.com/current?access_key=32e06eaffa8b2eb06f3269752688ab0f&query=Mirzapur

const request = require('postman-request')
const api_key = '32e06eaffa8b2eb06f3269752688ab0f'
const query = process.argv[2]
const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`


request({url,json:true},(error,res,data)=>{

    if(error){
        console.log('Connectivity Error')
    }
    else if(data.error){
        console.log('Check the Location')
    }
    else{
        console.log(`The Temperature in ${data.location.name},${data.location.country} is ${data.current.temperature} degrees`)
    }
})





// You get your raw JSON Data in the console.

// - The request(), takes 2 arguments :
//     - The first being options like URL, json value, etc (check DOCS)
//     - The second is a callback function which executes when we get a response from the API.
//     - the callback function in turn takes 3 parameters depending on the typeof response from the API.
//         - error - If any error occurred, this parameter is populated.
//         - res - This contains the responseIncomingMessages with info about the status code of our HTTP Request.
//         - data - If the request was successful we get our raw JSON data from the API on 'data'