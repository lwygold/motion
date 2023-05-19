let scrollTop = document.documentElement.scrollTop;
let height = //보여지는 영역을 제외한 길이
  document.documentElement.scrollHeight - //스크롤의 총길이
  document.documentElement.clientHeight //보여지는 영역 
let scrollWidth = (scrollTop / height) * 100;

$(function () {

  window.addEventListener('scroll', () => onScroll())

  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: () => innerHeight * 4,
        scrub: true,
        pin: ".grid",
        anticipatePin: 1
      }
    })
    .set(".gridBlock:not(.centerBlock)", {
      autoAlpha: 0
    })
    .to(".gridBlock:not(.centerBlock)", {
      duration: 0.1,
      autoAlpha: 1
    }, 0.001)
    .from(".gridLayer", {
      scale: 3.3333,
      ease: "none",
    });


  // Images to make it look better, not related to the effect
  const size = Math.max(innerWidth, innerHeight);
  gsap.set('.gridBlock', {
    backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})`
  });

  const bigImg = new Image;
  bigImg.addEventListener("load", function () {
    gsap.to(".centerPiece .gridBlock", {
      autoAlpha: 1,
      duration: 0.5
    });
  });

  bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;

});

const onScroll = function () {
  scrollTop = document.documentElement.scrollTop;
  height = //보여지는 영역을 제외한 길이
    document.documentElement.scrollHeight - //스크롤의 총길이
    document.documentElement.clientHeight //보여지는 영역 
  scrollWidth = (scrollTop / height) * 100;  
  $('.nav > div > div').css('height', scrollWidth + "%");
}