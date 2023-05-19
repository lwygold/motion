var scrollTop = document.documentElement.scrollTop;
var height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
var scrollWidth = (scrollTop / height) * 100;   
  


$(function () {

  //greensock basic setting
  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-wrap",
      start: "top top",
      scrub: true,      
    },
  });

  tl1.to('.nav > div > div', {
    height: "100%",     
  },"="+scrollWidth+"%");

});

const onScroll = function() {
  scrollTop = document.documentElement.scrollTop;
  height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
  scrollWidth = (scrollTop / height) * 100; 
  console.log(scrollWidth);
}

window.addEventListener('scroll', () => onScroll())  

