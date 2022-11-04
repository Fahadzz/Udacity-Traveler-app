// This file will have the Api requests
const axios = require('axios');

// API Functions calls
exports.geoNames = async (location) => {
    let res = await axios.post(
        `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${process.env.USER}`
    );
    try {
        const resData = await res.data.geonames[0]
        const data = {
            "city": resData.name,
            "countryName": resData.countryName,
            "lng": resData.lng,
            "lat": resData.lat
        }
        return data;
    } catch (error) {
        console.log(error);
    }
}
exports.weatherData = async (lat, lng) => {
    let res = await axios.post(
        `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${process.env.WEATHER_KEY}`
    );
    return res.data.data[0].temp;
}

exports.pixabayApi = async (term) => {
    let res = await axios.post(
        `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${term}&editors_choice=true&image_type=photo&orientation=horizontal`
    );

    try {
        return res.data.hits[0].largeImageURL;
    } catch (err) {
        console.log(err);
    }
}
