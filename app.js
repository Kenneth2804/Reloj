function updateTime() {
	
	const now = new Date();

	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');

document.getElementById('hour').textContent = hours;
document.getElementById('minute').textContent = minutes;
document.getElementById('second').textContent = seconds;

}

setInterval(updateTime, 1000);

updateTime();