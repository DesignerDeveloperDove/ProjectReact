
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
 });


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  location.replace(location.href);
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.44/build/spline-viewer.js"></script>

