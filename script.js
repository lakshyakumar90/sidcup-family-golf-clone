let cursor = document.querySelector("#cursor");

function cursorEnter() {
    gsap.to("#cursor", {
      scale: 3,
      border: "1px solid #fff",
      backgroundColor: "transparent",
    });
  }
  
  function cursorLeave() {
    gsap.to("#cursor", {
      scale: 1,
      border: "0px solid #95C11E",
      backgroundColor: "#95C11E",
    });
  }
function customCursor() {
  document.addEventListener("mousemove", (details) => {
    gsap.to("#cursor", {
      left: details.x + "px",
      top: details.y + 30 + "px",
    });
  });

  document.addEventListener("mousemove", (details) => {
    gsap.to("#blur-cursor", {
      delay: 0.2,
      left: details.x - 200 + "px",
      top: details.y - 200 + "px",
    });
  });

  let aall = document.querySelectorAll("#nav a");
  aall.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      cursorEnter();
      elem.style.color = "#95c11e";
    });
    elem.addEventListener("mouseleave", function () {
      cursorLeave();
      elem.style.color = "#fff";
    });
  });

  let card = document.querySelectorAll(".card");

  card.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      cursorEnter();
    });
    elem.addEventListener("mouseleave", function () {
      cursorLeave();
    });
  });

  let logo = document.querySelector("#logo");
  logo.addEventListener("mouseenter", function () {
    cursorEnter();
  });
  logo.addEventListener("mouseleave", function () {
    cursorLeave();
  });

  let arrow = document.querySelector("#arrow");
  arrow.addEventListener("mouseenter", function () {
    cursorEnter();
  });
  arrow.addEventListener("mouseleave", function () {
    cursorLeave();
  });

  let h3 = document.querySelector("#page4 h3");

  h3.addEventListener("mouseenter", function () {
    cursorEnter();
  });

  h3.addEventListener("mouseleave", function () {
    cursorLeave();
  });

  let anchorall = document.querySelectorAll("#footer a, #footer img");
  anchorall.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      cursorEnter();
      elem.style.color = "#fff";
    });
    elem.addEventListener("mouseleave", function () {
      cursorLeave();
      elem.style.color = "#000";
    });
  });
}

function scrollTrigger(){
  gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    delay: 0.5,
    height: "6.8vw",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      start: "top -4%",
      end: "top -7%",
      scrub: 2,
    },
  });
  
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -4%",
      end: "top -90%",
      scrub: 2,
    },
  });
  
  gsap.from("#about-us",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
      trigger: "#about-us",
      scroller: "body",
      start: "top 70%",
      end: "top 60%",
      scrub: 2,
    }
  })
  
  gsap.from(".card",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
      trigger: ".card",
      scroller: "body",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
    }
  })
  
  gsap.from("#colon1",{
    top: "7vw",
    left: "4vw",
    duration: 1,
    scrollTrigger:{
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 40%",
      scrub: 1,
    }
  })
  
  gsap.from("#colon2",{
    bottom: "8vw",
    right: "9vw",
    duration: 1,
    scrollTrigger:{
      trigger: "#colon1",
      scroller: "body",
      start: "top 40%",
      end: "top 35%",
      scrub: 1,
    }
  })
  
  gsap.from("#last-div h1",{
    y:50,
    duration: 1,
    scrollTrigger:{
      trigger: "#last-div h1",
      scroller: "body",
      start: "top 80%",
      end: "top 73%",
      scrub: 1,
    }
  })
}

customCursor();
scrollTrigger();

