/* Quiz game in the console

1. Build a function constructor called Question to descrive a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it to the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question object for this task.)

5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as I displayed it in task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all the code is private and doesn't interfere with the other programmers code. (Closures)

// Expert Level

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be Careful: Include the option to quit the game if the user writes 'exit' instead of the answer. In this case don't call the function from task 8.

10. Track the users score to make the game more fun! So add 1 point for each correct answer.

11. Use a method to display the score in the console.

*/

/*
//7 privacy IIFE
(function(){
	//function constructor
function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

Question.prototype.displayQuestion = function() {
	console.log(this.question);
	
	for(var i = 0; i < this.answers.length; i++){
		console.log(i + ": " + 
		this.answers[i]);
	}
};

Question.prototype.checkAnswer = 
function(ans){
	if (ans === this.correct){
		console.log("Correct answer!");
	}
	else{
		console.log("Wrong answer, Try again!");
	}
};

//questions and setting the parameters to Question
var q1 = new Question("Is JavaScript the coolest programming language in the world",
					 ["Yes", "No"],
					 0);

var q2 = new Question("What's the quiz-makers name",
					 ["Alan", "Sukh", "Tania"], 1);

var q3 = new Question("Where is the quiz-maker from?",
					 ["Leeds", "Manchester", "Slough"], 2);

//storing the questions into an array
var questions = [q1, q2, q3];

// creating a random number 
var n = Math.floor(Math.random() * questions.length);

//assigning the random number variable to the questions object
questions[n].displayQuestion();

//5.

var answer = parseInt(prompt("Please select the correct answer."));

questions[n].checkAnswer(answer);

})();
*/

//Expert Level

(function(){
	//function constructor
function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

Question.prototype.displayQuestion = function() {
	console.log(this.question);
	
	for(var i = 0; i < this.answers.length; i++){
		console.log(i + ": " + 
		this.answers[i]);
	}
};

Question.prototype.checkAnswer = 
function(ans, callback){
	var sc;
	
	if (ans === this.correct){
		console.log("Correct answer!");
		sc = callback(true);
	}
	else{
		console.log("Wrong answer, Try again!");
	
		sc = callback(false);
	}
	this.displayScore(sc);
};
	
Question.prototype.displayScore = function(score){
	console.log("Your current score is: " + score);
	console.log("--------------------------");
};
	
//questions and setting the parameters to Question
var q1 = new Question("Is JavaScript the coolest programming language in the world",
					 ["Yes", "No"],
					 0);

var q2 = new Question("What's the quiz-makers name",
					 ["Alan", "Sukh", "Tania"], 1);

var q3 = new Question("Where is the quiz-maker from?",
					 ["Leeds", "Manchester", "Slough"], 2);

var questions = [q1, q2, q3];
//storing the questions into an array
	
//keeping the score
function score(){
	var sc = 0;
	return function(correct){
		if (correct){
			sc++;
		}
		return sc;
	}
}
	
var keepScore = score();

//initialising the next question
function nextQuestion(){

// creating a random number 
var n = Math.floor(Math.random() * questions.length);

//assigning the random number variable to the questions object
questions[n].displayQuestion();

//5.

var answer = (prompt("Please select the correct answer."));
//allowing the user to exit the quiz
	if(answer !== "exit"){
	
		questions[n].checkAnswer(parseInt(answer), keepScore);
		
		nextQuestion();
	}
}
	nextQuestion();
	
})();
