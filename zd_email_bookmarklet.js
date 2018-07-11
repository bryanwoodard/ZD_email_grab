/*
Simple Script to grab emails from ZD

Add Following code as a bookmarklet
	- Paste full code as the URL like you would a bookmark

Instructions to use:
	- wait until page loads
	- expand box to show all cc's
	- hover over each one until you see the tooltip appear
	- run bookmarklet
*/

javascript:(function(){
	var email_array=[];
	var ccs = document.querySelectorAll(".current_collaborators ul li:not(.zd-tag-shortener)");
	for(var i = 0; i<ccs.length; i++){
		/*debugger;*/
		email_array.push(ccs[i].getAttribute("data-original-title"));

	};
	
	console.log(email_array);
	if(email_array.length == 0 && email_array[0] == null){
		alert("Make sure you expand the cc's box and hover over each person until the tooltip shows with their email.  Try it again");
	}else{
		/*/alert(email_array);*/
		debugger;
		email_array = email_array.toString();
		prompt("You can now copy these with CMD + C and paste them into your meeting invite", email_array);
	}
	
})();






