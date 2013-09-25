//This method makes the banner in TV fades in after the page loads

$('#introBanner').delay(500).fadeIn(1000);

//When "Get Started" button is clicked, Banner and getStarted sections fade away & the first question, q1 answers and progress bar (on right) fade in

$('#start').on('click', function(){
	  console.log( "start button functions");
	 // var getStarted = $('#getStarted');
	  //var banner = $('#banner');
	  $('#getStarted').hide();
	  $('#introBanner').hide();
	 q1Appear();
	  
});

//TO DO 1: Not working! - If user clicks return on landing page, start button will be triggered

$('#start').keydown(function(){
	 // var getStarted = $('#getStarted');
	  //var banner = $('#banner');
	  if (event.which == 13){
	  console.log( "keypress button functions");
	  $('#getStarted').hide();
	  $('#introBanner').hide();
	 q1Appear();
	  }
});

//When user clicks on an answer, ".selectedAnswer" class is added to that answer. If the user changes the answer they've selected (before submiting), the class is removed from the previous answer and added to the newly selected answre

$(".answer").on('click', function(){
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

/*clearScreen() and appear() functions clear the screen, serve up the next answers, updates the progressLamp (rightAnswer / wrongAnswer) and currentQuestion classes, when user clicks on submit and continue buttons */ 

function clearScreen() {
		$('#topQuestion').css({'opacity':'0'});
		$('.answers').hide();
		$('#submitButton').hide();
		$('#progress').hide();
		$('#orangeTv').hide();
	};

function q1Appear(){
	  $('#topQuestion').css({'opacity': '1'});
	  $("#topQuestion").show();
	  $("#firstQuestion").show();
	  $("#progress").show();
	  $('#progressLamp1').removeClass('unAnswered');
	  $('#progressLamp1').addClass('currentQuestion');
	  $('#q1').show();
	  $('#submitButton').show();
	  $('#orangeTv').show();
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
	  	$('#orangeTv').show();
	  	$('#rhBanner').delay(300).fadeIn(1000);
};

function q2Clear(){
		console.log("in q2Clear");
		console.dir($("#rhBanner"));
		$("#secondQuestion").hide();
		$('#rhBanner').hide();
		$('#progressLamp2').removeClass('currentQuestion');
		$('#progressLamp2').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
		console.dir($("#rhBanner"));
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
	  	$('#orangeTv').show();
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
	  	$('#orangeTv').show();
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
	  	$('#orangeTv').show();
	  	$('#survivorBanner').delay(300).fadeIn(1000);
};

function q5Clear(){
		$("#fifthQuestion").hide();
		$('#survivorBanner').hide();
		$('#progressLamp5').removeClass('currentQuestion');
		$('#progressLamp5').addClass('rightAnswer');
		$('.answer').removeClass('selectedAnswer');
};

//checkAnswer() function checks whether the selected answer for each question is correct. The function runs when user clicks submit for each answer

function checkAnswer(question, answer){
	console.log("in checkAnswer " + question + " " + answer);

	if (question == "q1" && answer == "New York"){
		console.log("You're right!");
		clearScreen();
		q1Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp1').addClass('rightAnswer');
	}
	else if (question == "q1" && answer !== "New York") {
		console.log("Answer 1 - wrong");
		clearScreen();
		q1Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp1').addClass('wrongAnswer');
	}
	else if (question == "q2" && answer == "Beverly Hills") {
		console.log("Answer 2 - You're right!");
		clearScreen();
		q2Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp2').addClass('rightAnswer');
	}
	else if (question == "q2" && answer !== "Beverly Hills"){
		console.log("Answer 2 - wrong!");
		clearScreen();
		q2Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp2').addClass('wrongAnswer');
	}
	else if (question == "q3" && answer == "3") {
		console.log("Answer 3 - You're right!");
		clearScreen();
		q3Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp3').addClass('rightAnswer');
	}
	else if (question == "q3" && answer !== "3"){
		console.log("Answer 3 - wrong!");
		clearScreen();
		q3Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp3').addClass('wrongAnswer');
	}
	else if (question == "q4" && answer == "North") {
		console.log("Answer 4 - You're right!");
		clearScreen();
		q4Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp4').addClass('rightAnswer');
	}
	else if (question == "q4" && answer !== "North"){
		console.log("Answer 4 - wrong!");
		clearScreen();
		q4Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp4').addClass('wrongAnswer');
	}
	else if (question == "q5" && answer == "Richard") {
		console.log("Answer 5 - You're right!");
		clearScreen();
		q5Clear();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp5').addClass('rightAnswer');
	}
	else if (question == "q5" && answer !== "Richard"){
		console.log("Answer 5 - wrong!");
		clearScreen();
		q5Clear();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp5').addClass('wrongAnswer');
	}
	else {
		
	}

};

//When user submits their answer to a question, this function uses checkAnswer to check whether the answer was right or wrong and produce the appropriate next step

$("#submitButton").on('click', function(){
	console.log("in submit");
	
	$(this).css({'background-color':'#445155'})

	console.dir($('.selectedAnswer')[0]);

	var questionNumber = $('.selectedAnswer')[0].parentElement.id;
	var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");
	
	checkAnswer(questionNumber, questionAnswer);
});

//When a user clicks continue in the right/wrong pop-up that appears after they've answered a question, this function contains if statements that serve up the next answer depending .unAnswered.legnth

$(".continue").click(function(){
	$('#incorrect').css({'display':'none'});
	$('#correct').css({'display':'none'});

	var progressPercent = ((5 -($('.unAnswered').length))/5)*100;
	var progressUpdate = "<br>" + progressPercent + "% Complete";
	var goodbyeMessage = "You got " + (5 - $('.wrongAnswer').length) + " out of 5 questions right.<br>To retake the quiz, just click below."

	$('#progressUpdate').empty().append(progressUpdate);

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
		//These methods load up the endPage when the user has completed the quiz
		$('#body').css({'background-color':'#F3F0F0'});
		$('#orangeTv').hide();
		$('#progressMeter').hide();
		$('#progress').hide();
		$('#endPage').css({'display':'block'});
		$('#goodbye').append(goodbyeMessage);
	};

});

//This function makes the page reload when the user clicks the "Try Again!"

function reloadPage(){
	location.reload();
};