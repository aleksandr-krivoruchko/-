
window.addEventListener('scroll', function(e) {
	let s = window.pageYOffset;//высота страницы
	let w = this.outerWidth;//ширина страницы

let h = document.querySelector(".content").clientHeight;
let h_b = document.querySelector(".parallax").clientHeight;

let p = s/h*100;
let p_b = s/h_b*100;
let o = 1 - 1/100*p_b;

//==============туман=================
let z = 1 + (w/10000*p_b);
let fog = document.querySelector('.parallax__fog');
fog.style.transform = `scale(${z})`;
fog.style.opacity = `${o}`;
//==============дальняя гора=================
let z_1 = 1 + (w/5000000*p);
let m_1 = document.querySelector('.parallax__mountain1');
m_1.style.transform = `scale(${z_1})`;
//==============ближняя правая гора=================
let hr_2 = w/2000*p_b;
let z_2 = 1 + (w*0.000005*p_b);
let m_2 = document.querySelector('.parallax__mountain2');
m_2.style.transform = `scale(${z_2})`, `translate3d(${hr_2}px,0,0)`;
//==============ближняя левая гора=================
let hr_3 = w/1500*p_b;
let z_3 = 1 + (w*0.00001*p_b);
let m_3 = document.querySelector('.parallax__mountain3');
m_3.style.transform = `scale(${z_3})`, `translate3d(${hr_3}px,0,0)`;
});