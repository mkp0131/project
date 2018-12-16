const h1Element = document.querySelector("h1");
const h2Element = document.querySelector("h2");
const pElement = document.querySelector("p");

navigator.geolocation.getCurrentPosition(function(position) {
	const latitude = Math.floor(position.coords.latitude);
	const longitude = Math.floor(position.coords.longitude);
	const getWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=cb5246d6b85c278a24795a03b2fec637&units=metric`).then(function(res) {
		return res.json();
	}).then(function(json) {
		const weatherStatus = json.weather[0].main;
		const weatherDescription = json.weather[0].description;
		const weatherTemp = json.main.temp;
		h1Element.innerText = weatherStatus;
		h2Element.innerText= weatherDescription;
		pElement.innerText = weatherTemp + "℃";
	});
});


