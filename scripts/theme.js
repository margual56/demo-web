function changetheme(button){
    let goto_dark = button.id=="moon";

    console.log(goto_dark);

    button.className = "theme";
    document.getElementById(goto_dark?"sun":"moon").className = "theme active";

    document.getElementById("body").className = goto_dark?"dark":"";
    document.getElementById("navbar").className = "navbar " + (goto_dark?"dark":"");
}