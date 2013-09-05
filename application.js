console.log("page loads.");

/*Banner in TV fades in*/

$('#banner').fadeIn('100');

/*Banner and getStarted sections fade away when "Get Started" button is clicked. first question, q1 answers and progress bar (right) fade in*/

$('#start').on('click', function(){
	  console.log( "start button functions");
	 // var getStarted = $('#getStarted');
	  //var banner = $('#banner');
	  $('#getStarted').hide();
	  $('#banner').hide();
	  $('#topQuestion').css({'opacity': '1'});
	  $("#topQuestion").show();
	  $("#firstQuestion").show();
	  $("#progress").show();
	  $('#progressLamp1').removeClass('unAnswered');
	  $('#progressLamp1').addClass('currentQuestion');
	  $('#q1').show();
	  $('#submitButton').show();
});

$(".answer").on('click', function(){
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

//STUCK POINT 2: Now that I've set up multiple answers, how do I make this $("submitButton") function work? I think what I do is continue adding to the if statements below

$("#submitButton").on('click', function(){
	console.log("in submit");
	
	$(this).css({'background-color':'#445155'})

	var questionNumber = $('.selectedAnswer')[0].parentElement.id;
	var questionAnswer = $('.selectedAnswer')[0].outerText;
	
	console.dir(questionNumber);
	console.dir(questionAnswer);
	
	var clearScreen = function () {
		$('#topQuestion').css({'opacity':'0'});
		$('.answers').hide();
		$('#submitButton').hide();
	}
//STUCK POINT 3: Why isn't this showing up as true when the console.log is printing with these same values?
	if (questionNumber=="q1" && questionAnswer=="NEW YORK"){
		console.log("You're right!");
		clearScreen();
		$("#firstQuestion").hide();
		$('#correct').css({'display':'inline-block'});
		$('#progressLamp1').removeClass('currentQuestion');
		$('#progressLamp1').addClass('rightAnswer');
	}
	else {
		console.log("you're wrong");
		clearScreen();
		$("#firstQuestion").hide();
		$('#incorrect').css({'display':'inline-block'});
		$('#progressLamp1').removeClass('currentQuestion');
		$('#progressLamp1').addClass('wrongAnswer');
	}
});

//goal is to count the number of unAnswered questions - number of elements in the unAnswered array
//STUCK POINT 1: Can't figure out how to extract unAnswered Length
var unAnswered = $('.unAnswered').length;
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
	else if (unAnswered == 2){
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
	else if (unAnswered == 1){
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