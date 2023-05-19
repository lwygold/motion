$(function () {

  //greensock basic setting
  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section1",
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
    onComplete: function () {
      $('.nav div').css('height', 0);
    }
  }, "+=15%");

  


});