function newpost(button){
	button.style="display: none";

	document.querySelector(".new-post-form").classList.add("active");

	document.querySelectorAll("nav, main.content").forEach(elem => {
		if(!elem.classList.contains("blurry")){
			elem.classList.add("blurry");
		}
	});


}