function facaAlgo (event) {
	console.log("Screen:" + event.screenY + " - Client:" + event.clientY + " - Page:" + event.pageY);
	console.log("\n\n" + event.which);
}

function highlight () {
	document.body.classList.toggle('highlight');
}

addEventListener('click', facaAlgo);

addEventListener('keydown', highlight);

once = document.getElementById('once');
once.addEventListener('click', remove);

function remove (event) {
	console.log('Olhai o evento');
	once.style.background = "green";
	once.removeEventListener('click', remove);
};


btnlink = document.getElementById('btnlink');

btnlink.addEventListener('click', function (e) {
	console.log(e.cancelable);//comportamento pode ser cancelado?
	e.preventDefault(); //cancela comportamento padrão
	console.log('Evento evitado aewww  \\o/');
	console.log(e.defaultPrevented);//comportamento foi cancelado?

});


ul = document.getElementById('list');
li = document.querySelector('#list li');


/*

ul.addEventListener('click', function (event) {
	console.log('Clicou na UL');
});

li.addEventListener('click', function (event) {
	console.log('Clicou na LI');
});
*/


ul.addEventListener('click', function (event) {
  console.log('Clicou na UL');
}, true);

li.addEventListener('click', function (event) {
  console.log('Clicou na LI');
}, true);



var tabela = document.getElementById("tabela2");
tabela.addEventListener('click', function (evento) {
	console.log("O evento foi disparado pelo elemento " + evento.target);
});
