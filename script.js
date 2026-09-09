function changeColor(){ 
    document.getElementById("home").style.color ="Red"; 
}
function makeRed(){
	document.getElementById("home").style.color="Red";
}
function makeBlue(){
    document.getElementById("home").style.color="Blue";
}
function makeGreen(){
	document.getElementById("home").style.color="Green";
}
function yellowBackground(){
	document.body.style.backgroundColor ="yellow";
}
function blueBackground(){
	document.body.style.backgroundColor ="blue";
}
function whiteBackground(){
	document.body.style.backgroundColor ="white";
}
function darkmode(){
	document.body.style.backgroundColor ="black";
	document.body.style.color ="white"
}
function lightmode(){
	document.body.style.backgroundColor ="white";
	document.body.style.color ="black";
}
function changeMessage(){
	document.getElementById("message").innerHTML =
	"Thank you for visiting my website!";
}
windows.addEventListener("scroll" , function(){
	document.getElementbyId("BackToTop");
	Btn.style.display = window.scrollY > 200 ? "block"; "none";
});
document.getElementById("BackToTop");
windows.scrollTo({
	top:"0",
	behaviour:"smooth"
});
});
