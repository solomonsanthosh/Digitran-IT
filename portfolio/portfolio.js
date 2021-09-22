const gsapCall = (trig,pos) => {
   gsap
	.timeline({
		scrollTrigger: {
			trigger: trig,
			start: "top 80%",
		},
	})
	.from(trig, {
		duration: .8,
		left: pos
		// stagger: 0.1,
	});
}

gsapCall(".slide1","30%")
gsapCall(".slide2", "-10%")
gsapCall(".slide3","30%")
