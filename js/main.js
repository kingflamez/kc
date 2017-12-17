function navigate() {
	console.log(document.getElementById("mySidenav").style.width);
	if (document.getElementById("mySidenav").style.width == "250px") {
		document.getElementById("mySidenav").style.width = "0";
    	document.getElementById("content").style.transform = "translate(0)";
	}

	else{
	    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("content").style.transform = "translate(-250px)";
	}
}
$(".my-rating").starRating({
    starSize: 18,
    initialRating: 4.5,
    readOnly: true,
    callback: function(currentRating, $el){
        // make a server call here
    }
});