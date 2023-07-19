const linkedinIcon = document.querySelector("img[alt='LinkedIn']");
const githubIcon = document.querySelector("img[alt='GitHub']");
const instagramIcon = document.querySelector("img[alt='Instagram']");

linkedinIcon.addEventListener("click", function() {
	window.open("https://www.linkedin.com/in/vanshajgupta01/", "_blank");
});

githubIcon.addEventListener("click", function() {
	window.open("https://github.com/IMVanshajGupta", "_blank");
});

instagramIcon.addEventListener("click", function() {
	window.open("https://www.instagram.com/vanshajguptaa/");
});

//contact me