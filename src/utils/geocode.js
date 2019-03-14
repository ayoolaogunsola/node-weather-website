const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYXlvb2xhbyIsImEiOiJjanQ2MmN6bXUwY3NzNDRsZnc3eHQza2QzIn0.eJThstoHyQCivVPjgn3Eaw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const longitude = body.features[0].center[0];
            const latitude =  body.features[0].center[1];
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name 
            })
        }
    })


    // request({ url: url, json: true }, (error, response) => {
    //     if (error) {
    //         callback('Unable to connect to location services!', undefined)
    //     } else if (response.body.features.length === 0) {
    //         callback('Unable to find location. Try another search.', undefined)
    //     } else {
    //         const longitude = response.body.features[0].center[0];
    //         const latitude =  response.body.features[0].center[1];
    //         callback(undefined, {
    //             longitude: response.body.features[0].center[0],
    //             latitude: response.body.features[0].center[1],
    //             location: response.body.features[0].place_name 
    //         })
    //     }
    // })
}


module.exports = geocode;