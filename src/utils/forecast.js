const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/fcda844df4e4662b8fa51884d200c6c3/' + lat + ',' + long
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        }  else {
            callback(undefined,  body.daily.data[0].summary 
                + ' It is currently ' + body.currently.temperature 
                + ' degrees Farenheit out. The high today is ' + body.daily.data[0].temperatureHigh 
                + ' with a low of ' + body.daily.data[0].temperatureLow + '.There is a ' 
                + body.currently.precipProbability + '% chance of rain.')
        }
    })

    // request({ url: url, json: true }, (error, response) => {
    //     if (error) {
    //         callback('Unable to connect to weather service!', undefined)
    //     } else if (response.body.error) {
    //         callback('Unable to find location', undefined)
    //     }  else {
    //         callback(undefined,  response.body.daily.data[0].summary 
    //             + ' It is currently ' + response.body.currently.temperature + ' degrees Farenheit out. There is a ' 
    //             + response.body.currently.precipProbability + '% chance of rain')
    //     }
    // })
}

module.exports = forecast;