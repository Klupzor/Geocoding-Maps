const APIKey = 'INSERT GOOGLE API KEY';

function getLocationByAddress(address) {
    const axios = require("axios");

    const url = 'https://maps.googleapis.com/maps/api/geocode/json'
    let location;
    const params = {
        key: APIKey,
        address
    }

    axios.get(url, { params })
        .then(function (response) {
            // handle success
            location = response.data.results[0].geometry.location
            console.log(location);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            return location;
        });

}
