const weather = require('./functions/weather.js');
const query = process.argv[2]

weather('Bangalore',(error,data)=>{
    if (error !== undefined) {
        console.log(error)
    }else{
        console.log(`The Temperature in ${data.location.name}, ${data.location.country} is ${data.current.temperature} degrees`)
    }
})