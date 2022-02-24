window.onscroll = function() {scrollEffect()};

function scrollEffect() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header").style.opacity = "0.8";
  } 
  else {
    document.getElementById("header").style.opacity = "1";
  }
}