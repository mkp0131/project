const watchBoard = document.querySelector(".watch-board");
const MONTH_NAME = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function watch() {
	let time = new Date();
	let monthName = MONTH_NAME[time.getMonth()];
	let secondName = time.getSeconds();
	if(secondName < 10) {
		secondName = "0" + time.getSeconds();
	};
	let dateName = time.getUTCDate();
	if ( dateName === 1 ) {
		dateName += "st";
	} else if ( dateName === 2 ) {
		dateName += "nd";
	} else if ( dateName === 3 ) {
		dateName += "rd";
	} else {
		dateName += "th";
	}
	let getToday = `${dateName} ${monthName} ${time.getFullYear()}`;
	let getTime = `<span>${time.getHours()}</span> : <span>${time.getMinutes()}</span> : <span>${secondName}</span>`;
	watchBoard.querySelector(".today").innerHTML = getToday;
	watchBoard.querySelector(".time").innerHTML = getTime;
};
watch();

setInterval(() => {
	watch();
}, 1000);