$(function () {

  //greensock basic setting
  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-wrap",
      start: "top top",
      pin: true,
      scrub: 1,
      end: () => innerHeight * 4,
      invalidateOnRefresh: true,
    },
  });


  tl1.to('.nav div', {
    height: "20",
    immediateRender: true,    
  }, "+=15%");

  


});