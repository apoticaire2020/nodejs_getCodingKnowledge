const weather =  ( location , unit , callback) => {

    const url = `http://api.weatherstack.com/current?access_key=4a3a6dafcfa76e29cd2fb34be23be9cc&query=${encodeURIComponent(location)}&units=${unit}`

    fetch(url)
     .then(response => response.json())
     .then(data => 
        {
            if (data.success === false) {
               callback(`impossible renvoyer info .error ${data.error.code}: ${data.error.info}` , undefined)

            }else  
            {
                const {current , location} = data;
                callback(undefined , `le nom ville est ${location.name} , le pays est ${location.country}
                 , il fait ${current.temperature} celsius , le ressenti est ${current.feelslike} 
                 car le temps est ${current.weather_descriptions[0]}` )
            }
        });
}

module.exports = {weather}