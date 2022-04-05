const rotateItems = document.querySelectorAll('._rotate');
// const header = document.getElementById('header-web')
const animItems = document.querySelectorAll('._anim-items');
const screenHeight = window.screen.availHeight;

for (let i=0; i<rotateItems.length; i++){
    rotateItems[i][i]=0.1 * getRandomInt(10)
}

;(function () {
    var throttle = function (type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle("scroll", "optimizedScroll");
})();

if (animItems.length > 0 || rotateItems.length > 0) {
    window.addEventListener('optimizedScroll', animOnScroll);

    function animOnScroll(params) {

        // if (window.scrollY > 5) {
        //     header.style.background = 'rgba(0,0,0,0.38)'
        // } else {
        //     header.style.background = 'rgba(0, 0, 0, 0)'
        // }

        for (let i = 0; i < rotateItems.length; i++) {
            const rotateItem = rotateItems[i];
            const rotateItemsHeight = rotateItem.offsetHeight;
            const rotateItemOffset = offset(rotateItem).top;
            const rotateStart = 4;

            let rotateItemPoint = window.innerHeight - rotateItemsHeight / rotateStart;

            if (rotateItemsHeight > window.innerHeight) {
                rotateItemPoint = window.innerHeight - window.innerHeight / rotateStart;
            }

            if ((window.scrollY > rotateItemOffset - rotateItemPoint) && window.scrollY < (rotateItemOffset + rotateItemsHeight)) {
                rotateItem.style.transform = "rotate(" + (window.scrollY * rotateItems[i][i]) + "deg)";
            }
        }

        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemsHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemsHeight / animStart;

            if (animItemsHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemsHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    setTimeout(() => {
            animOnScroll()
        }, 500
    )
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 0.2);
}



