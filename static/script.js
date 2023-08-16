let crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})

let crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsrBlur.style.left = dets.x - "200" + "px"
    crsrBlur.style.top = dets.y - "200" + "px"

})



gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -20%",
        end: "top -11% ",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        start: "top -40%",
        end: "top -100% ",
        scrub: 1
    }
})