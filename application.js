console.log("page loads.");

/*Banner in TV fades in*/

$('#banner').fadeIn();

/*Banner and getStarted sections fade away when "Get Started" button is clicked. first question, q1 answers and progress bar (right) fade in*/

$('#start').on('click', function(){
	  console.log( "start button functions");
	  var getStarted = $('#getStarted');
	  var banner = $('#banner')
	  $('getStarted').hide();
	  $('banner').hide();
	  $("topQuestion").show();
	  $("topQuestion:0").show();
	  $("#progress").show();

});