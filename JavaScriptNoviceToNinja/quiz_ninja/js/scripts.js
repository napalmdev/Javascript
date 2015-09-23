(function () {
	
	//bem vindo usuario
	alert("Bem vindo ao Quiz Ninja!");

	var quizz = {
		"name": "Quizz dos Super Heróis",
		"description": "Você sabe o nome de quantos heróis?",
		"question": "Qual o verdadeiro nome do(a) ",
		"questions": [
			{"question": "Superman", "answer": "Clarke Kent"},
			{"question": "Batman", "answer": "Bruce Waine"},
			{"question": "Mulher Maravilha", "answer": "Diana Prince"}
		]
	};

	var score = 0;

	play(quizz);
	

	function play(quizz) {
		//loop principal do jogo
		var question, answer; 

		var max = quizz.questions.length;

		for(var i = 0; i < max; i++) {
			question = quizz.questions[i].question;
			answer = ask(question);
			check (answer);
		}
		//fim do loop do jogo
		gameOver();	
		
		function ask(question) {
			return prompt(quizz.question + question);
		}


		function check(answer) {
			if(answer === quizz.questions[i].answer) {
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