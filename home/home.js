var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
const grid3 = document.querySelector(".grid3");
const grid4 = document.querySelector(".grid4");
const grid5 = document.querySelector(".grid5");
const grid6 = document.querySelector(".grid6");
const grid7 = document.querySelector(".grid7");
const grid8 = document.querySelector(".grid8");
const grid9 = document.querySelector(".grid9");
const grid10 = document.querySelector(".grid10");
const grid11 = document.querySelector(".grid11");
const grid12 = document.querySelector(".grid12");
const grid13 = document.querySelector(".grid13");
const grid14 = document.querySelector(".grid14");
const grid15 = document.querySelector(".grid15");
const audio = new Audio("./resources/audio.mp3");

const gridFunctionality = (app1, app2, x, y) => {
	app1.addEventListener("mouseover", () => {
		app2.innerHTML = x;
		audio.play();
	});
	app1.addEventListener("mouseout", () => {
		app2.innerHTML = y;
	});
};

gridFunctionality(grid2, grid1, "lorem in the is the", "Managed IT support");
gridFunctionality(grid4, grid3, "content2", "Cloud Backup");
gridFunctionality(grid6, grid5, "content3", "Anti-virus Protection");
gridFunctionality(grid8, grid7, "content4", "Firewall");
gridFunctionality(grid10, grid9, "content5", "Files sharing & Collab");
gridFunctionality(grid12, grid11, "content6", "Hardware & Software");
gridFunctionality(grid14, grid13, "content7", "Business Intelligence");

const homePage = document.querySelector(".homePage");
const gridHome = document.querySelector(".gridHome");
const portfoliodiv = document.querySelector(".portfoliodiv");
const portfolioatag = document.querySelector(".portfolioatag");
const blurportfolio = document.querySelector(".blurportfolio");
const career = document.querySelector(".career");
const careeratag = document.querySelector(".careeratag");
const footer = document.querySelector("footer");

const gsapHomePage = (trig, trigdiv) => {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: trig,
			},
		})
		.to(trigdiv, {
			duration: 0.6,
			y: 50,

		});
};

// gsapHomePage(gridHome , gridHome)
gsapHomePage(portfoliodiv , portfoliodiv)
gsapHomePage(portfolioatag , portfolioatag)
gsapHomePage(blurportfolio , blurportfolio)
gsapHomePage(career , career)
gsapHomePage(careeratag , careeratag)
gsapHomePage(footer , footer)

var gridEvenAfter = CSSRulePlugin.getRule(".gridEven::after")
var gridOddAfter = CSSRulePlugin.getRule(".gridOdd::after")
console.log(gridEvenAfter[0])



const gridDivs = (trig, trigdiv) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: trig,
                start: 'top 60%'
            }
        })
        .to(trigdiv, {
            cssRule: {
                duration: 0.5,
                x: '-100%'
            },
			stagger : 0.1,
        });
};
gridDivs(".gridHome" , gridEvenAfter)
gridDivs(".gridHome" , gridOddAfter)