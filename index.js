const regex = RegExp('^http:\/\/common\.jejunu\.ac\.kr\/em\/[a-zA-Z0-9]*$');
const frame = document.querySelector('iframe#bodyFrame')

const INTERVAL = 100;
const trigger = setInterval(async function() {
	if (regex.test(frame.src)){
		open(frame.src, "_blank", "width=1060, height=689");
		clearInterval(trigger)
	}
}, INTERVAL);
