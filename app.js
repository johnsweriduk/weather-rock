$(() => {
	const key = 'e5a1c9b4f117b606aead46c48f1cb204';
	const protocol = window.location.href.indexOf("https://")==0?"https://":"http://";
	const forecast = [];
	let forecastIndex = 0;
	const displayWeather = (url) => {
		$.ajax({
			url: url
		})
		.done(data => {
			console.log(data);
			let swayAmount = Math.ceil(data.wind.speed / 5) * 5
			if(swayAmount > 45) {
				swayAmount = 45;
			}
			$('#weather-rock .rain').empty();
			const windAnimation = 'sway' + swayAmount;
			console.log(windAnimation);
			$('#weather-rock #rock').css('animation-name', windAnimation);
			const rain = data.rain;
			if(typeof rain !== 'undefined') {
				makeItRain(rain['1h'] * 25);
				if(rain['1h'] > 0.75) {
					$('.rain.back-row').css('display','block');
				}
			}
			console.log(data.name);
			$('main > .title').find('p').remove();
			$('main > .title').append('<p>' + data.name + '</p>');
		});
	}
	const displayForecast = (url) => {
		forecast.splice(0,forecast.length);
		$.ajax({
			url: url
		})
		.done(data => {
			let forecast5 = data.list;
			for(let i = 0; i < 5; i++) {
				forecast.push(forecast5[i]);
			}
			let swayAmount = Math.ceil(forecast[0].wind.speed / 5) * 5
			if(swayAmount > 45) {
				swayAmount = 45;
			}
			$('#weather-rock-forecast .rain').empty();
			const windAnimation = 'sway' + swayAmount;
			console.log(windAnimation);
			$('#weather-rock-forecast #rock').css('animation-name', windAnimation);
			const rain = forecast[0].rain;
			if(typeof rain !== 'undefined') {
				makeItRainForecast(rain['3h'] * 75);
				if(rain['1h'] > 0.75) {
					$('.rain.back-row').css('display','block');
				}
			}
		});
	}
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			pos => {
				let url = `${protocol}api.openweathermap.org/data/2.5/weather?q=${pos}&appid=${key}`;
				let forecastUrl = `${protocol}api.openweathermap.org/data/2.5/forecast?q=${pos}&appid=${key}`;
				if(pos !== '') {
					url = `${protocol}api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${key}`;
					forecastUrl = `${protocol}api.openweathermap.org/data/2.5/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${key}`;
				}
				displayWeather(url);
				displayForecast(forecastUrl);
			}
		);
	}
	$('input[type="submit"]').click( () => {
		const loc = $('input[type="text"]').val();
		forecastIndex = 0;
		$('#title').find('p').hide();
		$('#title').find('p:first-child').show();
		if(loc !== '') {
			const url = `${protocol}api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
			const forecastUrl = `${protocol}api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${key}`;
			displayWeather(url);
			displayForecast(forecastUrl);
		}
	});
	$('input[type="text"]').keyup( e => {
		if ($('input[type="text"]').is(":focus") && (e.keyCode == 13)) {
			forecastIndex = 0;
			$('#title').find('p').hide();
			$('#title').find('p:first-child').show();
			const loc = $('input[type="text"]').val();
			if(loc !== '') {
				const url = `${protocol}api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
				const forecastUrl = `${protocol}api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${key}`;
				displayWeather(url);
				displayForecast(forecastUrl);
			}
		}
	});
	$('#controls .left-arrow').click( () => {
		if(forecastIndex == 0) {
			forecastIndex = 4;
		} else {
			forecastIndex--;
		}
		let swayAmount = Math.ceil(forecast[forecastIndex].wind.speed / 5) * 5
		if(swayAmount > 45) {
			swayAmount = 45;
		}
		$('#weather-rock-forecast .rain').empty();
		const windAnimation = 'sway' + swayAmount;
		console.log(windAnimation);
		$('#weather-rock-forecast #rock').css('animation-name', windAnimation);
		const rain = forecast[forecastIndex].rain;
		console.log(rain);
		if(typeof rain !== 'undefined') {
			makeItRainForecast(rain['3h'] * 75);
			if(rain['1h'] > 0.75) {
				$('.rain.back-row').css('display','block');
			}
		} else {
			$('#weather-rock-forecast .rain').empty();
		}
		$('#title').find('p').hide();
		let showTitle = forecastIndex + 1;
		$('#title').find('p:nth-child(' + showTitle + ')').show();
	});
	$('#controls .right-arrow').click( () => {
		if(forecastIndex == 4) {
			forecastIndex = 0;
		} else {
			forecastIndex++;
		}
		console.log(forecast[forecastIndex]);
		let swayAmount = Math.ceil(forecast[forecastIndex].wind.speed / 5) * 5
		if(swayAmount > 45) {
			swayAmount = 45;
		}
		$('#weather-rock-forecast .rain').empty();
		const windAnimation = 'sway' + swayAmount;
		console.log(windAnimation);
		$('#weather-rock-forecast #rock').css('animation-name', windAnimation);
		const rain = forecast[forecastIndex].rain;
		console.log(rain);
		if(typeof rain !== 'undefined') {
			makeItRainForecast(rain['3h'] * 75);
			if(rain['1h'] > 0.75) {
				$('.rain.back-row').css('display','block');
			}
		} else {
			$('#weather-rock-forecast .rain').empty();
		}
		$('#title').find('p').hide();
		let showTitle = forecastIndex + 1;
		$('#title').find('p:nth-child(' + showTitle + ')').show();
	});
});