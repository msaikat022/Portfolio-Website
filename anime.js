const tl = gsap.timeline({ duration: 0.75, ease: "Power3.easeOut" });

tl.fromTo(".name-heading", { y: 100 }, { y: 0, duration: 1 });
tl.fromTo(".main-para", { scale: 2 }, { scale: 1, duration: 1 }, "<");
gsap.set(".sp1", { display: "inline-block" });
gsap.set(".sp2", { display: "inline-block" });
gsap.set(".sp3", { display: "inline-block" });
tl.fromTo(".sp1", { x: -200 }, { x: 0, duration: 1 }, "<20%");
tl.fromTo(".sp2", { y: 100 }, { y: 0, duration: 1 }, "<");
tl.fromTo(".sp3", { x: 200 }, { x: 0, duration: 1 }, "<");
