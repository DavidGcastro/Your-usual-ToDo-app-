// check off specific todos by clicking
$("ul").on("click", "li",(function(){ 
	// why we need this. WE NEED TO USE ON! We can only add a listener using jquery on elements that exist when the code runs the first time, so we wont account for the new lis (todos), so
	//we listen to the parent - ul. so anytime we click in the ul the listener will fire, but the second argument li says 
	// when an li is clicked inside a ul
	//so we added a listener that exists when the page loads, a ul. This DOES NOT CHANGE. We are adding more lis, not uls. So this 
	//code takes into account the new lis coming in the future. 
	//so we added a listener to an element that exists on page load, but were only listening to lis within that, so it is dynamic
    $(this).toggleClass("completed");

}));

//click on x to delete to do 
$("ul").on("click", "span", function(event){ 
//stops bubbling. Since span is within an li, which we are listening to above, all events that are nested in this element will fire. Span >> li >> and so on. This stops it. 
  $(this).parent().fadeOut(500, function(){
  	$(this).remove();
  }); //targets parent , Li;
	event.stopPropagation();

});

// adding todos
// target input field to listen on keypress

$("input[type='text']").keypress(function(event){
//check for enter key
// which in keypress corresponds to the charcode of key
if(event.which === 13){
//extract value of input, this being the arg "event". This is referring to event. 
	//grab new to do text
	var todoText = $(this).val();
	
	$(this).val(" "); // clears after enter
	//create new li and add to ul
	//apend, choose an element to add to, and then appending there.
	$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>"); //concatenate! to use the variable and add elements to it as shown
	//use single quotes to avoid interference
}
})

$("h1 i").on("click", function(){
	 $("input").fadeToggle();
	});







//before toggle



// if($(this).css("color") === "rgb(128, 128, 128)")
	// {
	//   $(this).css({
 //        color:"black",
 //        textDecoration: "none"
	//   	});
	// }  
	//  //find what color this currently has, use rgb
	//  else{
	//  	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });

	//  }










