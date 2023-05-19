let scrollTop = document.documentElement.scrollTop;
let height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
let scrollWidth = (scrollTop / height) * 100;   
  
$(function () {
  
  

});

const onScroll = function() {
  scrollTop = document.documentElement.scrollTop;
  height = //보여지는 영역을 제외한 길이
      document.documentElement.scrollHeight - //스크롤의 총길이
      document.documentElement.clientHeight //보여지는 영역 
  scrollWidth = (scrollTop / height) * 100;   
  console.log(scrollWidth);
  $('.nav > div > div').css('height',scrollWidth+"%");
}

window.addEventListener('scroll', () => onScroll())  

