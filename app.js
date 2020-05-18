$(() => {
	const key = 'e5a1c9b4f117b606aead46c48f1cb204';
	
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
			$('.rain').empty();
			const windAnimation = 'sway' + swayAmount;
			console.log(windAnimation);
			$('#rock').css('animation-name', windAnimation);
			const rain = data.rain;
			if(typeof rain !== 'undefined') {
				makeItRain(rain['1h'] * 25);
				if(rain['1h'] > 0.75) {
					$('.rain.back-row').css('display','block');
				}
			}
		});
	}
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			pos => {
				let url = `http://api.openweathermap.org/data/2.5/weather?q=${pos}&appid=${key}`;
				if(pos !== '') {
					url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${key}`;
				}
				displayWeather(url);
			},
			err => {
				const pos = 'Chillicothe,Ohio'
				let url = `http://api.openweathermap.org/data/2.5/weather?q=${pos}&appid=${key}`;
				displayWeather(url);
			}
		);
	}
	$('input[type="submit"]').click( () => {
		const loc = $('input[type="tel"]').val();
		if(loc !== '') {
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
			displayWeather(url);
		}
	});
	$('input[type="tel"]').keyup( e => {
		if ($('input[type="tel"]').is(":focus") && (e.keyCode == 13)) {
			const loc = $('input[type="tel"]').val();
			if(loc !== '') {
				const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
				displayWeather(url);
			}
		}
	});
});