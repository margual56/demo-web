function changetheme(button){
    let goto_dark = button.id=="moon";

    button.className = "theme";
    document.getElementById(goto_dark?"sun":"moon").className = "theme active";

    document.getElementById("body").className = goto_dark?"dark":"";
    document.getElementById("navbar").className = "navbar " + (goto_dark?"dark":"");

	window.localStorage.setItem("darktheme", goto_dark);

	console.log("Stored that you want the " + (goto_dark?"dark":"light") + " theme!");
}

function loadtheme(){
	let goto_dark = window.localStorage.getItem("darktheme")==="true";
	
	console.log("Loaded that you want the " + (goto_dark?"dark":"light") + " theme!");
	
	console.time("Theme switched in");

	let btn_sun = document.getElementById("sun");
	let btn_moon = document.getElementById("moon");

	if(btn_sun){
		btn_sun.classList.toggle("active", goto_dark);
	}

	if(btn_moon){
		btn_moon.classList.toggle("active", !goto_dark);
	}

	let body = document.getElementById("body");
	body.classList.toggle("dark", goto_dark);

	let navbar = document.getElementById("navbar");
	navbar.classList.toggle("dark", goto_dark);

	console.timeEnd("Theme switched in");
}