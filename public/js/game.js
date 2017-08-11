//window.onload=hidding();
//$(document).ready(hidding());
								
$(document).ready(function(){

	$('#doors1').click(function(){
		var element = document.getElementById('doors1');
		if (element.value == 'Door 1') element.value = 'Open';
		else element.value = 'Closed';
	});

	$('#doors2').click(function(){
		var element = document.getElementById('doors2');
		// if (element.value == 'Door 2') element.value = 'Open';
		// else element.value = 'Closed';
		element.hide();
	});

	$('#doors3').click(function(){
		var element = document.getElementById('doors3');
		if (element.value == 'Door 3') element.value = 'Open';
		else element.value = 'Closed';
	});

	$('#doors4').click(function(){
		var element = document.getElementById('doors4');
		if (element.value == 'Door 4') element.value = 'Open';
		else element.value = 'Closed';
	});

	$('#doors5').click(function(){
		var element = document.getElementById('doors5');
		if (element.value == 'Door 5') element.value = 'Open';
		else element.value = 'Closed';
	});


		

	// shaking the doors
	// $('#doors1').addClass('animated bounce');
	// $('#doors2').addClass('animated jackInTheBox');
	// $('#doors3').addClass('animated swing');
	// $('#doors4').addClass('animated jello');
	// $('#doors5').addClass('animated flipInX');

	// fliping the cards
	$("#card_1").flip();
	$("#card_2").flip();
	$("#card_3").flip();
	$("#card_4").flip();
	$("#card_5").flip();

	
	
});
// reseting the pages
function myReset() {
    
   location.reload();

}

// var hidden = false;

// setInterval(function(){
//     document.getElementById("image").style.visibility= hidden ? "visible" : "hidden";
//     hidden = !hidden;
// },2000);


//all hiddings
function hidding() {

	
	$("#image1").hide();
	setTimeout(function() { $("#image1").show(); }, 1000);
	$("#image2").hide();
	setTimeout(function() { $("#image2").show(); }, 1000);
	$("#image3").hide();
	setTimeout(function() { $("#image3").show(); }, 1000);
	$("#image4").hide();
	setTimeout(function() { $("#image4").show(); }, 1000);
	$("#image5").hide();
	setTimeout(function() { $("#image5").show(); }, 1000);

}


$(document).ready(function(){



});