function animations() {

    const btn = document.querySelector('.btn'),
        elem1 = document.querySelector('.first'),
        elem2 = document.querySelector('.second');
    let pos = 0;

    function myAnimation1() {
        let pos = 0;

        const id = setInterval(frame, 10);

        function frame() {
            if (pos === 300) {
                clearInterval(id);
            } else {
                pos++;
                elem1.style.top = pos + "px";
                elem1.style.left = pos + 'px';
            }
        }
    }

    function myAnimation2() {
        pos++;
        elem2.style.top = pos + "px";
        elem2.style.left = pos + 'px';

        if (pos < 300) {
            requestAnimationFrame(myAnimation2);
        } else {
            pos = 0
        }
    }

    btn.addEventListener('click', () => {
        myAnimation1()
        requestAnimationFrame(myAnimation2)
    });

    let id = requestAnimationFrame(myAnimation2);
    cancelAnimationFrame(id);
}

export default animations

