var mykey = config.MY_KEY
const $input = $("input")
const $button = $("button")
const $aside = $("aside")

$button.on("click", () => {
    // get the text value from the text box the user typed in.
    const $searchCity = $input.val()
    // make the api call
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${$searchCity}&appid=${mykey}`)
    .then((data) => {
        // console.log(data)
        const $cityName = data.name
        const $cityLat = data.coord.lat
        const $cityLon = data.coord.lon
        $.ajax(`https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${$cityLat}&lon=${$cityLon}&appid=da0da58eef351f5da13c80b41976e9d5`)
        .then((data) => {
            // console.log(data);
            $("#city").html(`${$cityName}`);
            $("#temp").html(`${data.current.temp} F`);
            $("#feels").html(`${data.current.feels_like} F`);
            $("#weather").html(`${data.current.weather[0].main}`);
        })
        $input.val("").clear();
    })
})
