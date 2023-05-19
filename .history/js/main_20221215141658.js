let scrollTop = document.documentElement.scrollTop;
let height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
let scrollWidth = (scrollTop / height) * 100;   
  

$(function () {

  //greensock basic setting
  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-wrap",
      start: "top top",
      pin: ".scroll-wrap > div",
      scrub: true,
      snap: {
        snapTo: 1 / 4, // progress increment
        // or "labels" or function or Array
        duration: 0.5,
        directional: true,
        ease: "power3",        
      },    
      end: () => innerHeight * 4,            
    },
  });

  

  tl1.to('.nav > div > div', {
    height: "100%",    
    onUpdate: () => {
      console.log(scrollWidth+'%');
    },
  },  scrollWidth + "%");

  
  

});

const onScroll = function() {
  scrollTop = document.documentElement.scrollTop;
  height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
  scrollWidth = (scrollTop / height) * 100;     
}

window.addEventListener('scroll', () => onScroll())  