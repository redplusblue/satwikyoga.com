extraInfo = document.querySelectorAll('#more-info');



console.log(window.scrollY);

const reveal = () => {
    let x = window.scrollY;
    if (x > 60) {
        extraInfo.forEach(info => {
            info.classList = 'visible';
        }
    );
    } else {
        extraInfo.forEach(info => {
            info.classList = 'hidden';
        }
    );
    }
}

window.addEventListener('scroll', reveal);
