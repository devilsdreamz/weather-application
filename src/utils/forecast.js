const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4c193ff1d12a3b19f9382b955645ab10/' + latitude + ',' + longitude +'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. \n\n The temperature range is between '+ body.daily.data[0].temperatureHigh + ' and ' + body.daily.data[0].temperatureLow+ '. \n Humidity is ' + body.daily.data[0].humidity + '.')
        }
    })
}

module.exports = forecast