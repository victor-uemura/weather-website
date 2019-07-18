const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8026a91d16de1cca66f80fd20072db33/' + latitude + ',' + longitude + '?units=si'

    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unble to find location!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. \nThere is a ' + body.currently.precipProbability + '% chance of rain. \nThe high is ' + body.daily.data[0].temperatureHigh + '\nWith a low of ' + body.daily.data[0].temperatureLow + 'Mariana is a fart-face')
        }
    })
}

module.exports = forecast