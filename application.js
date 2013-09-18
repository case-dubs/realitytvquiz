
//Next step 4: get the "You're done" page set up
//Next step 5: clean up the css

/*Banner in TV fades in*/

$('#introBanner').delay(500).fadeIn(1000);

/*Banner and getStarted sections fade away when "Get Started" button is clicked. first question, q1 answers and progress bar (right) fade in*/

$('#start').on('click', function(){
	  console.log( "start button functions");
	 // var getStarted = $('#getStarted');
	  //var banner = $('#banner');
	  $('#getStarted').hide();
	  $('#introBanner').hide();
	 q1Appear();
	  
});

//".selectedAnswer" class added to the answer that the user selects. If the user changes the answer they've selected (before submiting), the class is removed from the previous answer and added to the newly selected answre

$(".answer").on('click', function(){
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

//Functions that clear the screen, serve up the next answers, updates the progressLamp (rightAnswer / wrongAnswer) and currentQuestion classes, when user 

function clearScreen() {
		$('#topQuestion').css({'opacity':'0'});
		$('.answers').hide();
		$('#submitButton').hide();
	};

function q1Appear(){
	  $('#topQuestion').css({'opacity': '1'});
	  $("#topQuestion").show();
	  $("#firstQuestion").show();
	  $("#progress").show();
	  $('#progressLamp1').removeClass('.unAnswered');
	  $('#progressLamp1').addClass('currentQuestion');
	  $('#q1').show();
	  $('#submitButton').show();
	  $('#realworldBanner').delay(300).fadeIn(1000);
};

function q1Clear(){
		$("#firstQuestion").hide();
		$('#realworldBanner').hide();
		$('#progressLamp1').removeClass('currentQuestion');
		$('#progressLamp1').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
};

function q2Appear(){
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#secondQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp2').removeClass('unAnswered');
	 	$('#progressLamp2').addClass('currentQuestion');
	 	$('#q2').show();
	  	$('#submitButton').show();
	  	$('#rhBanner').delay(300).fadeIn(1000);
};

function q2Clear(){
		$("#secondQuestion").hide();
		$('#rhBanner').hide();
		$('#progressLamp2').removeClass('currentQuestion');
		$('#progressLamp2').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
};

function q3Appear(){
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#thirdQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp3').removeClass('unAnswered');
	 	$('#progressLamp3').addClass('currentQuestion');
	 	$('#q3').show();
	  	$('#submitButton').show();
	  	$('#bachelorBanner').delay(300).fadeIn(1000);
};

function q3Clear(){
		$("#thirdQuestion").hide();
		$('#bachelorBanner').hide();
		$('#progressLamp3').removeClass('currentQuestion');
		$('#progressLamp3').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
};

function q4Appear(){
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#fourthQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp4').removeClass('unAnswered');
	 	$('#progressLamp4').addClass('currentQuestion');
	 	$('#q4').show();
	  	$('#submitButton').show();
	  	$('#kardashiansBanner').delay(300).fadeIn(1000);
};

function q4Clear(){
		$("#fourthQuestion").hide();
		$('#kardashiansBanner').hide();
		$('#progressLamp4').removeClass('currentQuestion');
		$('#progressLamp4').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
};

function q5Appear(){
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#fifthQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp5').removeClass('unAnswered');
	 	$('#progressLamp5').addClass('currentQuestion');
	 	$('#q5').show();
	  	$('#submitButton').show();
	  	$('#survivorBanner').delay(300).fadeIn(1000);
};

function q2Clear(){
		$("#fifthQuestion").hide();
		$('#survivorBanner').hide();
		$('#progressLamp5').removeClass('currentQuestion');
		$('#progressLamp5').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
};

//UNSTUCK POINT 2: Now that I've set up multiple answers, how do I make this $("submitButton") function work? I think what I do is continue adding to the if statements below

//STUCK POINT: question won't update to newest question (stays at q1) when user moves on to next question. This may be because "$('.answer').removeClass('selectedAnswer');" in the "clear" functions isn't the correct syntax

//Function that checks whether the selected answers are correct for each answer - function runs when user clicks submit for each answer
function checkAnswer(question, answer){
	console.log("in checkAnswer");

	if (question = "q1" && answer == "New York"){
		console.log("You're right!");
		clearScreen();
		q1Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp1').addClass('rightAnswer');
	}

	//for some reason, the q2 answer submission is triggering this else if console.log for q1.
	else if (question = "q1" && answer !== "New York") {
		console.log("Answer 1 - wrong");
		clearScreen();
		q1Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp1').addClass('wrongAnswer');
	}
	else if (question = "q2" && answer == "Beverly Hills") {
		console.log("Answer 2 - You're right!");
		clearScreen();
		q2Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp2').addClass('rightAnswer');
	}
	else if (question = "q2" && answer !== "Beverly Hills"){
		console.log("Answer 2 - wrong!");
		clearScreen();
		q2Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp2').addClass('wrongAnswer');
	}
	else if (question = "q3" && answer == "3") {
		console.log("Answer 3 - You're right!");
		clearScreen();
		q3Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp3').addClass('rightAnswer');
	}
	else if (question = "q3" && answer !== "3"){
		console.log("Answer 3 - wrong!");
		clearScreen();
		q3Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp3').addClass('wrongAnswer');
	}
	else if (question = "q4" && answer == "North") {
		console.log("Answer 4 - You're right!");
		clearScreen();
		q4Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp4').addClass('rightAnswer');
	}
	else if (question = "q4" && answer !== "North"){
		console.log("Answer 4 - wrong!");
		clearScreen();
		q4Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp4').addClass('wrongAnswer');
	}
	else if (question = "q5" && answer == "Richard") {
		console.log("Answer 5 - You're right!");
		clearScreen();
		q5Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp5').addClass('rightAnswer');
	}
	else if (question = "q5" && answer !== "Richard"){
		console.log("Answer 5 - wrong!");
		clearScreen();
		q5Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp5').addClass('wrongAnswer');
	}
	else {
		console.log("Check Answer not working.")
	}

	console.log(question + "  " + answer);

};

//When user submits their answer to a question, this function uses checkAnswer to check whether the answer was right or wrong and produce the appropriate next step

$("#submitButton").on('click', function(){
	console.log("in submit");
	
	$(this).css({'background-color':'#445155'})

	console.dir($('.selectedAnswer')[0]);

	var questionNumber = $('.selectedAnswer')[0].parentElement.id;
	var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");

	
	console.log(questionNumber);
	console.log(questionAnswer + "what?");
	
	checkAnswer(questionNumber, questionAnswer);
//UNSTOCK = STUCK POINT 3: Why isn't this showing up as true when the console.log is printing with these same values?
	
});

//goal is to count the number of unAnswered questions
//UNSTUCK - Need to put this in a function that then adjusts which question comes next (and what the progress is on the right) depending on how many answered questions there are.-  STUCK POINT 1: Can't figure out how to extract unAnswered Length
//var unAnswered = $('.unAnswered').length;

//console.log(unAnswered);

//STUCK POINT - Next step 3: get the progress bar / % functioning

var progressPercent = ((5 -($('.unAnswered').length))/5)*100;

var progressUpdate = "% done" + "" + progressPercent;
console.log(progressUpdate)

//var progressBar = document.getElementById("progressMeter");
//progressBar.appendChild - see how i did this on the shopping cart app


//When a user clicks continue in the right/wrong pop-up that appears after they've answered a question, this function contains if statements that serve up the next answer depending .unAnswered.legnth

$(".continue").click(function(){
	$('#incorrect').css({'display':'none'});
	$('#correct').css({'display':'none'});

//STUCK POINT: unAsnwered length isn't updating (stays as 5)

	if ($('.unAnswered').length == 4){
		q2Appear();
	}

	else if ($('.unAnswered').length == 3){
		q3Appear();
	}

	else if ($('.unAnswered').length == 2){
		q4Appear();
	}
	else if ($('.unAnswered').length == 1){
		q5Appear();
	}

	else{
		//
	};

	console.log("not yet answered" + " " + $('.unAnswered').length);
	console.log("number of current questions" + " "+ $('.currentQuestion').length);
		//second question should appear & progress bar should increase by .20
});