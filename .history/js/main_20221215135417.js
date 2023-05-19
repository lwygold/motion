$(function () {

  //greensock basic setting
  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-wrap",
      start: "top top",
      pin: true,      
      end: () => innerHeight * 4,
      invalidateOnRefresh: true,
    },
  });

  const scrollTop = document.documentElement.scrollTop;
  const height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
  const scrollWidth = (scrollTop / height) * 100;   

  tl1.to('.nav div', {
    height: "20",
    immediateRender: true,    
  }, "+=" + scrollWidth + "%");

  


});