
 // use a script tag or an external JS file

 
 gsap.fromTo("#SubHeader",{opacity:0},{opacity:1,duration:1});

 gsap.fromTo(".RightSide", {x: 1000, opacity:0 }, {x: 0, duration: .5 , opacity:1});
console.log("test");


gsap.registerPlugin(ScrollTrigger);
//bottom row 
gsap.fromTo(".imgRow2",
  {
    x:-1000,
    opacity:0
  },{
  x:0,
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:".imgRow2",
    start:"top bottom",
    end:"40px 30%",
    toggleActions:"play pause reverse restart ",
    scrub:true,
    markers:true,
    }
  }


);
//toprow
gsap.fromTo(".imgRow1",
  {
    x:2000,
    opacity:0
  },{
  x:0,
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:".imgRow1",
    start:"70px bottom",
    end:"70px 30%",
    toggleActions:"play pause reverse restart ",
    scrub:true,
    }
  }


);

// educational content 

gsap.fromTo(".card",
  {
    x:2000,
    opacity:0,
    width:20,
  },{
  x:0,
  width:1000,
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:".card",
    start:"70px bottom",
    end:"70px 30%",
    toggleActions:"play pause reverse restart ",
    scrub:true,
    }
  }


);
//
gsap.fromTo("#Showimg",
  {
    x:2000,
    opacity:0,
    width:20,
  },{
  x:0,
  width:1000,
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:".card",
    start:"70px bottom",
    end:"70px 30%",
    toggleActions:"play pause reverse restart ",
    scrub:true,
    }
  }


);

