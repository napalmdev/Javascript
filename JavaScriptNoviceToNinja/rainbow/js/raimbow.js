
var	rainbow	= ['red','orange','yellow','green','blue','indigo','violet'];
var btn = document.getElementById('btn');
btn.addEventListener('click', change);

function change() {
	var color = Math.floor( Math.random() * 7 );
	console.log(color);
	document.body.style.background = rainbow[color];
}