$(document).ready(function(){
	//Below are variables declared. Below that is a better way to do that.
	//var firstButton = $("#first-button");
	//var secondButton = $("#second-button");


//changes css, adds disabled property and sets to true.
//.on is the event listner, can be set to any number of events. In this case, it's click. Once clicked, it will run the function in the 2nd parameter.
	
	// $("#first-button").on("click", function(){
	// 	$(this).css("background-color", "red")
	// 		.prop("disabled", true)
	// 		.text("Don't click me!"); 
		
	// 	$("#second-button").css("background-color", "blue")
	// 		.prop("disabled", false)
	// 		.text("Click me!");

	// });

	// $("#second-button").on("click", function(){
	// 	$(this).css("background-color", "red")
	// 		.prop("disabled", true)
	// 		.text("Don't click me!"); 
		
	// 	$("#first-button").css("background-color", "blue")
	// 		.prop("disabled", false)
	// 		.text("Click me!");

	// });

	$("button").on("click", function(){
		$(this).css("background-color", "red")
			.prop("disabled", true)
			.text("Don't click me!"); 

		$("button").not($(this))
			.css("background-color", "blue")
			.prop("disabled", false)
			.text("Click me!");

	})

	

});