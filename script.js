const title = document.querySelector("header h2");
const consulting = document.querySelector("#consulting");
const wiring = document.querySelector("#wiring");
const programing = document.querySelector("#programing");
const design = document.querySelector("#design");
const activity = document.querySelector("#activity");
const header = document.querySelector("header");
const links = document.querySelectorAll("header a");

/****************************** ANIMATION SHAKE H2 *******************************/
window.onload = () => title.classList.add("shake");



/******************************* STICKY NAVBAR ************************************/
links.forEach((link) => link.addEventListener("click",scrollMan))

function scrollMan(){
	event.preventDefault();
	const hash = (this.hash)
	const destination = document.querySelector(hash);
	if(header.className ==='sticky'){
		window.scrollTo(0, destination.offsetTop - 90)
	}
	else{
		window.scrollTo(0, destination.offsetTop - 180)
	}
}

/****************************** ANIMATION APPARITION TEXT *******************************/
window.onscroll = () => {
	const rect = activity.getBoundingClientRect();
	if(rect.y <= 150){
		consulting.classList.add("visible");
		setTimeout(() => wiring.classList.add("visible"),500)
		setTimeout(() => programing.classList.add("visible"),1000)
		setTimeout(() => design.classList.add("visible"),1500)
		
	}
	
	if(window.pageYOffset == 0){
		header.classList.remove('sticky');
	}
	else{
		header.classList.add('sticky');
	}
	
}