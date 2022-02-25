window.onscroll = function() {scrollEffect()};

//Changes header's opacity to be more transparent when user scrolls down the page
function scrollEffect() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header").style.opacity = "0.9";
  } 
  else {
    document.getElementById("header").style.opacity = "1";
  }
}