const D = document
const $ = D.querySelector.bind(D)
const regex = RegExp('^http:\/\/common\.jejunu\.ac\.kr\/em\/[a-zA-Z0-9]*$');
const frame = $('iframe#bodyFrame')

const INTERVAL = 250;
const trigger = setInterval(function() {
	if (regex.test(frame.src)){
		open(frame.src, "_blank", "width=1060, height=689");
		clearInterval(trigger)
	}
}, INTERVAL);
