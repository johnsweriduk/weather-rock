$(() => {
	//e5a1c9b4f117b606aead46c48f1cb204
	const loc = 'Chillicothe,Ohio'
	//const loc = 'Los Angeles'
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=e5a1c9b4f117b606aead46c48f1cb204`
	})
	.done(data => {
		console.log(data);
		let windAnimation = 'sway' + Math.ceil(data.wind.speed / 5) * 5;
		console.log(windAnimation);
		$('#rock').css('animation-name', windAnimation);
		const rain = data.rain;
		if(typeof rain !== 'undefined') {
			makeItRain(rain['1h'] * 50);
			if(rain['1h'] > 0.75) {
				$('.rain.back-row').css('display','block');
			}
		}
	});
});