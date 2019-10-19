
//hide nav upon scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-40px";
  }
  prevScrollpos = currentScrollPos;
} 

//trying to show link text on scroll over image as menu
function hover(element) {
    element.setAttribute('my-image1', 'https://thepracticaldev.s3.amazonaws.com/i/33nr9dhmx07hgf5gcn31.jpg');
  }
  
  function unhover(element) {
    element.setAttribute('my-image1', 'https://thepracticaldev.s3.amazonaws.com/i/gu3h6ie1iduu1olm61kc.jpg');
  }