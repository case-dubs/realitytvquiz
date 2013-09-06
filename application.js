//Next step 1: build out checkAnswer funciton so that it produces correct/incorrect for each question, adds the wrongAnswer/rightAnswer class, and updates the progress bar. UNSTUCK POINT 2: Now that I've set up multiple answers, how do I make this $("submitButton") function work? I think what I do is continue adding to the if statements below
//Next Step 2: build out the continue.click function so that it serves up the next answer depending on the length of .unAnswered 
//Next step 3: get the progress bar / % functioning
//Next step 4: get the "You're done" page set up
//Next step 5: clean up the css

console.log("page loads.");

/*Banner in TV fades in*/

$('#introBanner').delay(500).fadeIn(1000);

/*Banner and getStarted sections fade away when "Get Started" button is clicked. first question, q1 answers and progress bar (right) fade in*/

$('#start').on('click', function(){
	  console.log( "start button functions");
	 // var getStarted = $('#getStarted');
	  //var banner = $('#banner');
	  $('#getStarted').hide();
	  $('#introBanner').hide();
	  $('#topQuestion').css({'opacity': '1'});
	  $("#topQuestion").show();
	  $("#firstQuestion").show();
	  $("#progress").show();
	  $('#progressLamp1').removeClass('unAnswered');
	  $('#progressLamp1').addClass('currentQuestion');
	  $('#q1').show();
	  $('#submitButton').show();
	  $('#realworldBanner').delay(300).fadeIn(1000);
});

$(".answer").on('click', function(){
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

function checkAnswer(question, answer){
	console.log("in checkAnswer");

	if (question = "q1" && answer == "New York"){
		console.log("You're right!");
		clearScreen();
		$("#firstQuestion").hide();
		$('#realworldBanner').hide();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp1').removeClass('currentQuestion');
		$('#progressLamp1').addClass('rightAnswer');
	}
	else if (question = "q1" && answer !== "New York") {
		console.log("you're wrong");
		clearScreen();
		$("#firstQuestion").hide();
		$('#realworldBanner').hide();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp1').removeClass('currentQuestion');
		$('#progressLamp1').addClass('wrongAnswer');
	}
	else /*(question = "q2" && answer == "Beverly Hills")*/{
		console.log("You're right!");
		clearScreen();
		$("#firstQuestion").hide();
		$('#realworldBanner').hide();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp1').removeClass('currentQuestion');
		$('#progressLamp1').addClass('rightAnswer');
	}
	console.log(question + "  " + answer);

};

$("#submitButton").on('click', function(){
	console.log("in submit");
	
	$(this).css({'background-color':'#445155'})

	console.dir($('.selectedAnswer')[0]);

	var questionNumber = $('.selectedAnswer')[0].parentElement.id;
	var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");

	
	console.log(questionNumber);
	console.log(questionAnswer + "what?");
	
	var clearScreen = function () {
		$('#topQuestion').css({'opacity':'0'});
		$('.answers').hide();
		$('#submitButton').hide();
	}
	checkAnswer(questionNumber, questionAnswer);
//UNSTOCK = STUCK POINT 3: Why isn't this showing up as true when the console.log is printing with these same values?
	
});

//goal is to count the number of unAnswered questions
//UNSTUCK - Need to put this in a function that then adjusts which question comes next (and what the progress is on the right) depending on how many answered questions there are.-  STUCK POINT 1: Can't figure out how to extract unAnswered Length
var unAnswered = $('.unAnswered').length;

console.log(unAnswered);

var progressPercent = ((5 -($('.unAnswered').length))/5)*100;

var progressUpdate = "% done" + "" + progressPercent;
console.log(progressUpdate)

//var progressBar = document.getElementById("progressMeter");
//progressBar.appendChild - see how i did this on the shopping cart app



$(".continue").click(function(){
	$('#incorrect').css({'display':'none'});
	$('#correct').css({'display':'none'});

		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#secondQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp2').removeClass('unAnswered');
	 	$('#progressLamp2').addClass('currentQuestion');
	 	$('#q2').show();
	  	$('#submitButton').show();
	  	$('#rhBanner').delay(300).fadeIn(1000);
		//second question should appear & progress bar should increase by .20
});

/* $("#continue").click(function(){
	$('#incorrect').css({'display':'none'});
	$('#correct').css({'display':'none'});


	if (unAnswered == 3){
		console.log("first question completed");
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#secondQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp2').removeClass('unAnswered');
	 	$('#progressLamp2').addClass('currentQuestion');
	 	$('#q2').show();
	  	$('#submitButton').show();
		//second question should appear & progress bar should increase by .20
	}
	else if (unAnswered == 5){
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#thirdQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp3').removeClass('unAnswered');
	 	$('#progressLamp3').addClass('currentQuestion');
	 	$('#q3').show();
	  	$('#submitButton').show();

		//third question should appear & progress bar should increase by .20
	}
	else if (unAnswered == 10){
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$("#secondQuestion").show();
	  	$("#progress").show();
	  	$('#progressLamp3').removeClass('unAnswered');
	 	$('#progressLamp3').addClass('currentQuestion');
	 	$('#q3').show();
	  	$('#submitButton').show();
		//fourth question should appear & progress bar should increase by .20
	}
	else {
		//you're done and scores (this many wrong '.wrongAnswer.length' and this many right 'rightAnswer.length') should appear & progress bar should increase be 100%
	}
}); */