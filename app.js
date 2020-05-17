$(() => {
	//e5a1c9b4f117b606aead46c48f1cb204
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=e5a1c9b4f117b606aead46c48f1cb204'
	})
	.done(data => {
		console.log(data);
	});
});