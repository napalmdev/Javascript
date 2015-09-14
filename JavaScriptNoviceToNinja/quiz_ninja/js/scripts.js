(function () {
	
	//bem vindo usuario
	alert("Bem vindo ao Quiz Ninja!");

	var quizz = [
	  ["Qual é o nome do Superman?", "Clarke Kent"],
	  ["Qual é o nome do Homem de Ferro?", "Tony Stark"],
	  ["Qual é o nome do Batman?", "Bruce Waine"]
	];

	var score = 0;

	play(quizz);
	

	function play(quizz) {
		//loop principal do jogo
		var question, answer; 

		var max = quizz.length;

		for(var i = 0; i < max; i++) {
			question = quizz[i][0];
			answer = ask(question);
			check (answer);
		}
		//fim do loop do jogo
		gameOver();	
		
		function ask(question) {
			return prompt(question);
		}


		function check(answer) {
			if(answer === quizz[i][1]) {
				alert("Correto =D");
				score++;
			} else {
				alert("Errado =(");
			}
		}


		function gameOver() {
			alert("O jogo terminou, você fez " + score + " pontos");
		}
	}


})();