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
	  $('#progressLamp1').addClass('currentQuestion');
	  $('#q1').show();
	  $('#submitButton').show();
});

$(".answer").on('click', function(){
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

$("#submitButton").on('click', function(){
	console.log("in submit");
	var questionNumber = $('.selectedAnswer')[0].parentElement.id;
	var questionAnswer = $('.selectedAnswer')[0].outerText;
	console.dir(questionNumber);
	console.dir(questionAnswer);
	
	if (questionNumber=="q1" && questionAnswer=="NEW YORK"){
		console.log("You're right!");
	}
	else {
		console.log("you're wrong");
	}
	$(this).css({'background-color':'#445155'})
	$('#topQuestion').css({'opacity':'0'});
	$('#secondQuestion').fadeIn();
});