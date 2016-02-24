(function () {
	
	//bem vindo usuario
	alert("Bem vindo ao Quiz Ninja!");



	function update (element, content, elClass) {	
		var p = element.firstChild || document.createElement('p');
		p.textContent = content;
		element.appendChild(p);
		if(elClass) {
			p.className = elClass;
		}
	}


	//DOM References //
	var $question 	= document.getElementById('question');
	var $score 		= document.getElementById('score');
	var $feedback 	= document.getElementById('feedback');
	var $start 		= document.getElementById('start'); 

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

	$start.addEventListener('click', function () { play(quizz); }, false);
	

	function play(quizz) {

		//iniciando scores
		update($score, score);


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
			update($question, quizz.question + question);
			return prompt("Digite sua resposta: ");
		}


		function check(answer) {
			if(answer === quizz.questions[i].answer) {
				update($feedback, "Correto!", "right");
				//incrementa o score
				score++;
				update($score, score);
			} else {
				update($feedback, "Errado!", "wrong");
			}
		}


		function gameOver() {
			update($question, "O jogo terminou, você fez " + score + " pontos");
		}
	}


})();