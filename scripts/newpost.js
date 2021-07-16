function newpost(button){
	button.style="display: none";

	document.querySelector(".new-post-form").classList.add("active");

	document.querySelectorAll("nav, main.content").forEach(elem => {
		elem.classList.toggle("blurry", true);
	});
}

function hideNewpost(){
	document.getElementById("new-post-button").style="";
	
	document.querySelector(".new-post-form").classList.remove("active");

	document.querySelectorAll("nav, main.content").forEach(elem => {
		elem.classList.toggle("blurry", false);
	});
}