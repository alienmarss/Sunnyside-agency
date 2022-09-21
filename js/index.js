// Mobile menu
const btnNavEl = document.querySelector(".nav-toggle-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		//Scroll to top
		if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

		//Scroll to #href
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		//Close mobile nav
		if (link.classList.contains("header__nav--link"))
			headerEl.classList.toggle("nav-open");
	});
});

//Sticky nav
const sectionHeroEl = document.querySelector(".hero");

const observer = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (ent.isIntersecting === false) document.body.classList.add("sticky");
		if (ent.isIntersecting === true) document.body.classList.remove("sticky");
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-120px",
	}
);
observer.observe(sectionHeroEl);
