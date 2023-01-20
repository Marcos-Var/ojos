let punto = document.querySelector(".punto");
let ojo = document.querySelector(".ojo");

let punto2 = document.querySelector(".punto2");
let ojo2 = document.querySelector(".ojo2");

document.onmousemove = (e)=> {
    let x = e.clientX * 150/ window.innerWidth + "%";
    let y = e.clientY * 150/ window.innerHeight + "%";
    
    punto.style.left = x;
    punto.style.top = y;

    let x2 = e.clientX * 120/ window.innerWidth + "%";
    let y2 = e.clientY * 120/ window.innerHeight + "%";

    punto2.style.left = x2;
    punto2.style.top = y2;
}