
 // use a script tag or an external JS file
/* document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
 }); 
 */
gsap.fromTo("#SubHeader",{opacity:0},{opacity:1,duration:5});

  gsap.fromTo("RightSide",{x:500},{y:1200,duration:10});


console.log("test");


