navigator.geolocation.getCurrentPosition(function(position) {
	const latitude = Math.floor(position.coords.latitude);
	const longitude = Math.floor(position.coords.longitude);
	const getWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=cb5246d6b85c278a24795a03b2fec637`).then(function(res) {
		return res.json();
	}).then(function(json) {
		console.log(json);
	});

});
