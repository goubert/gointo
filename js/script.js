const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height' , `${window.innerHeight}px`)
}

window.addEventListener('resize', documentHeight)
documentHeight()

const newHeight = document.querySelector('.menu-inside').offsetHeight

const docy = document.documentElement
docy.style.setProperty('--menu-height' , `${newHeight}px`)




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

console.log(btMoreMenu)
  