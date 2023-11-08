let container = document.getElementById('container');

let row = 0;
// let column = 6;
function mouseover(event) {
	const number = parseInt(event.target.textContent);
	let info = '';
	if (number % 2 === 0) {
		info += 'Even ';
	} else {
		info += 'Odd ';
	}
	if (isPrime(number)) {
		info += 'Prime';
	}
	event.target.setAttribute('title', info);
}

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

for (let i = 0; i <= 100; i++) {
	// for (let j = 0; j < column; j++) {
	let myGrid = document.createElement('div');
	myGrid.className = 'myGrid';
	myGrid.innerHTML = ` ${i}`;
	myGrid.style.width = '14vw';
	myGrid.style.height = '20vh';
	myGrid.style.border = '1px solid black';
	myGrid.style.textAlign = 'center';
	myGrid.style.alignItems = 'center';

	if (i % 2 == 0) {
		myGrid.style.backgroundColor = 'green';
	} else if (i % 2 == 1) {
		myGrid.style.backgroundColor = 'yellow';
	}
	// else if (i) {
	// 	myGrid.style.backgroundColor = 'red';
	// }
	if (isPrime(i)) {
		myGrid.style.backgroundColor = 'red';
	}
	myGrid.addEventListener('mouseover', mouseover);
	container.appendChild(myGrid);
}
////////////////////////////////////////////////////////////////////////////
