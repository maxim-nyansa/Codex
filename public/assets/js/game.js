
								
$(document).ready(function(){
	//my dropdown
	  	 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );



	// fliping the cards
	$("#card_1").flip({
  trigger: 'manual'
});
	//$("#card_1").flip();
	$("#card_2").flip();
	$("#card_3").flip();
	$("#card_4").flip();
	$("#card_5").flip();
 
 
	
	
});
// reseting the pages
function myReset() {
    
   location.reload();

}



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





// sitting time to autoflip
$(function(){

    // setTimeout(function(){
    //     $("#card_1").flip(true);
    // }, 3000);
    // setTimeout(function(){
    //     $("#card_2").flip(true);
    // }, 4000);
    setTimeout(function(){
        $("#card_3").flip(true);
    }, 5000);

});

//confirmation of flip
function myConfirm(){
	swal({
  title: 'Do You Want To Change Your Option?',
  //text: "Are you sure?",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonText: 'Yes, Change',
  cancelButtonColor: '#d33',
  confirmButtonText: 'No, Open it!'
}).then(function () {
  swal(
    'OPENED!',
    'Your Door # is Opened.',
    'success'
  ),
  $("#card_1").flip(true);
})
	
}