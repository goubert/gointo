const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height' , `${window.innerHeight}px`)
}

window.addEventListener('resize', documentHeight)
documentHeight()

const newHeight = document.querySelector('.menu-inside').offsetHeight

const docy = document.documentElement
docy.style.setProperty('--menu-height' , `${newHeight}px`)


/* 
Diminui o hero de atrações
*/
var heroAtracoes = document.querySelector('.hero-big-atracoes');
var wrapHeroAtracoes = document.querySelector('.wrap-hero-big');
var titleHeroAtracoes = document.querySelector('.wrap-hero-big > h1');
var listOptionsAtracoes = document.querySelector('.nav-content');
var optionsAtracoes = document.querySelectorAll('.nav-content > li a');
// console.log(optionsAtracoes)
// console.log(heroAtracoes)
function changeHeroAtracoes(){
    var scroll = (window.pageYOffset);
    
    if(scroll > 100){
        heroAtracoes.classList.add('after-scroll');
        wrapHeroAtracoes.classList.add('after-scroll');
        listOptionsAtracoes.classList.add('after-scroll');
        titleHeroAtracoes.classList.add('after-scroll');
        for(var i = 0; i < optionsAtracoes.length; ++i){
            optionsAtracoes[i].classList.add('after-scroll-nav');
        }
        
    }else{
        heroAtracoes.classList.remove('after-scroll');
        titleHeroAtracoes.classList.remove('after-scroll');
        listOptionsAtracoes.classList.remove('after-scroll');
        wrapHeroAtracoes.classList.remove('after-scroll');
        for(var i = 0; i < optionsAtracoes.length; ++i){
            optionsAtracoes[i].classList.remove('after-scroll-nav');
        }
        
    }
    
    
}

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(changeHeroAtracoes);
})




/* 
LINK ANCORA
*/


const sectionAtracoes = document.querySelectorAll('section');

function activeOptionsAtracoes(){
    let len = sectionAtracoes.length;
    while(--len && window.scrollY + 300 < sectionAtracoes[len].offsetTop){}
    optionsAtracoes.forEach(ltx => ltx.classList.remove("active"));
    optionsAtracoes[len].classList.add('active');
}
activeOptionsAtracoes();
window.addEventListener("scroll", activeOptionsAtracoes);


  
