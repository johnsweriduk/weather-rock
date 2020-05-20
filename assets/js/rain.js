const makeItRain = (amount) => {
	if(amount > 100) {
		amount = 100;
	}
	//clear out everything
	$('#weather-rock .rain').empty();

	var increment = 0;
	var drops = "";
	var backDrops = "";
	while (increment < amount) {
		//couple random numbers to use for various randomizations
		//random number between 98 and 1
		var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
		//random number between 5 and 2
		var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
		//increment
		increment += randoFiver;
		//add in a new raindrop with various randomizations to certain CSS properties
		drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		$('#weather-rock .rain.front-row').append(drops);
		$('#weather-rock .rain.back-row').append(backDrops);
	}
}
const makeItRainForecast = (amount) => {
	if(amount > 100) {
		amount = 100;
	}
	//clear out everything
	$('#weather-rock-forecast .rain').empty();
	console.log('rain');
	var increment = 0;
	var drops = "";
	var backDrops = "";
	console.log(amount);
	while (increment < amount) {
	console.log('rain1');
		//couple random numbers to use for various randomizations
		//random number between 98 and 1
		var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
		//random number between 5 and 2
		var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
		//increment
		increment += randoFiver;
		//add in a new raindrop with various randomizations to certain CSS properties
		drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		$('#weather-rock-forecast .rain.front-row').append(drops);
		$('#weather-rock-forecast .rain.back-row').append(backDrops);
	}
}