const cityForm = document.querySelector('form');

const updateCity = async(city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.key);

    return {
        // cityDets: cityDets,
        // weather: weather

        // object shorthand 
        // ==> We can do this when the key and value and thesame 

        cityDets,
        weather
    };

}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get city value 
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update UI with New City 
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
})