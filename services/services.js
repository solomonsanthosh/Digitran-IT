const gridBox1 = document.querySelector(".gridBox1");
const gridBox2 = document.querySelector(".gridBox2");
const gridBox3 = document.querySelector(".gridBox3");
const gridBox4 = document.querySelector(".gridBox4");
const gridBox5 = document.querySelector(".gridBox5");
const gridBox6 = document.querySelector(".gridBox6");
const gridBox7 = document.querySelector(".gridBox7");
const gridBox8 = document.querySelector(".gridBox8");
const gridBox9 = document.querySelector(".gridBox9");
const gridBox10 = document.querySelector(".gridBox10");



const gsapServicesPage = (trig) => {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: trig,
                start : "top 80%",
			},
		})
		.to(trig, {
			duration: 0.4,
            x : 0,
		});
};


gsapServicesPage(gridBox1);
gsapServicesPage(gridBox2);
gsapServicesPage(gridBox3);
gsapServicesPage(gridBox4);
gsapServicesPage(gridBox5);
gsapServicesPage(gridBox6);
gsapServicesPage(gridBox7);
gsapServicesPage(gridBox8);
gsapServicesPage(gridBox9);
gsapServicesPage(gridBox10);