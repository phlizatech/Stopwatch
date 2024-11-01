let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

document.querySelector('.start').addEventListener('click', function() {
	startTime = Date.now() - elapsedTime;
	timerInterval = setInterval(function() {
		elapsedTime = Date.now() - startTime;
		let seconds = Math.floor((elapsedTime / 1000) % 60);
		let minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
		let hours = Math.floor((elapsedTime / (60 * 60 * 1000)) % 24);
		document.querySelector('.time').textContent = 
			(hours < 10 ? '0' + hours : hours) + ':' + 
			(minutes < 10 ? '0' + minutes : minutes) + ':' + 
			(seconds < 10 ? '0' + seconds : seconds);
	}, 1000);
});

document.querySelector('.stop').addEventListener('click', function() {
	clearInterval(timerInterval);
});

document.querySelector('.reset').addEventListener('click', function() {
	elapsedTime = 0;
	document.querySelector('.time').textContent = '00:00:00';
});