(function(){
    const listElements = document.querySelectorAll('.menu-item--show');
    const list = document.querySelector('.menu-links');
    const menu = document.querySelector('.menu-hamburger');

    alert('listElements: ' + listElements)
    alert('menu: ' + menu)
    alert('list: ' + list)
    alert('extra: '+document.querySelectorAll('.menu'));

    const addClick = () => {
        listElements.forEach( element => {
            element.addEventListener('click', () => {
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu-item--active');

                // console.log(subMenu.clientHeight)
                if (subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`
            });
        });
    }

    const deleteStyleHeight = () => {
        listElements.forEach( elemento => {
            if (elemento.children[1].getAttribute('style')){
                elemento.children[1].removeAttribute('style');
                elemento.classList.remove('menu-item--active');
            }
        });
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if (list.classList.contains('menu-links--show')){
                list.classList.remove('menu-links--show');
            }
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }
    
    menu.addEventListener('click', () => list.classList.toggle('menu-links--show'));

})();

