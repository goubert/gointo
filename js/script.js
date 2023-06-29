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
MAIS OPCOES NO MENU NO MOBILE
*/

let closeMoreMenu = document.querySelector('.close-more-menu')
let btMoreMenu = document.querySelector('.m-mais')
let moreMenu = document.querySelector('.more-options-menu')

let openedMenuMore = true;

function openMoreMenu(event){
        event.preventDefault();
        if(openedMenuMore){
            moreMenu.style.display = 'flex';
            openedMenuMore = false;
        }else{
            moreMenu.style.display = 'none';
            openedMenuMore = true;
        }
}

closeMoreMenu.addEventListener('click' , openMoreMenu)

btMoreMenu.addEventListener('click' , openMoreMenu)


let bgFotoAtracao = document.querySelector('#foto-atracao');
let nomeAtracao = document.querySelector('#nome-atracao');

let listAtracoes = document.querySelector('#list-atracoes');

const urlAtracoes = 'atracoes.json';


/* 
Diminui o hero de atrações
*/
var heroAtracoes = document.querySelector('.hero-big-atracoes');
var wrapHeroAtracoes = document.querySelector('.wrap-hero-big');
var titleHeroAtracoes = document.querySelector('.wrap-hero-big > h1');
var listOptionsAtracoes = document.querySelector('.nav-content');
var optionsAtracoes = document.querySelectorAll('.nav-content > li a');
console.log(optionsAtracoes)
console.log(heroAtracoes)
function changeHeroAtracoes(){
    var scroll = (window.pageYOffset);
    console.log(scroll)
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})