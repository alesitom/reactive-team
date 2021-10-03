document.addEventListener('DOMContentLoaded', () => {
    console.log(document);
    const listElements = document.querySelectorAll('.menu-item--show');
    const list = document.querySelector('.menu-links');
    const menu = document.querySelector('.menu-hamburger');

    console.log(listElements)

    const addClick = () => {
        listElements.forEach( element => {
            element.addEventListener('click', () => {
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu-item--active');

                if (subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`
            });
        });
    }

    const deleteStyleHeight = () => {
        listElements.forEach( element => {
            if (element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu-item--active');
            }
        });
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024){
            deleteStyleHeight();
            if (list.classList.contains('menu-links--show')){
                list.classList.remove('menu-links--show');
            }
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 1024){
        addClick();
    }
    
    menu.addEventListener('click', () => list.classList.toggle('menu-links--show'));
});

//Carousel js:
document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const carousel = document.querySelector(".carousel-container");
    const track = document.querySelector(".track");
    let width = carousel.offsetWidth;
    let index = 0;
    window.addEventListener("resize", function () {
      width = carousel.offsetWidth;
    });
    next.addEventListener("click", function (e) {
      e.preventDefault();
      index = index + 1;
      prev.classList.add("show");
      track.style.transform = "translateX(" + index * -width + "px)";
      if (track.offsetWidth - index * width < index * width) {
        next.classList.add("hide");
      }
    });
    prev.addEventListener("click", function () {
      index = index - 1;
      next.classList.remove("hide");
      if (index === 0) {
        prev.classList.remove("show");
      }
      track.style.transform = "translateX(" + index * -width + "px)";
    });
});