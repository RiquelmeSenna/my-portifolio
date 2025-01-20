let aside = document.querySelector('aside');
let buttons = document.querySelectorAll('.buttons a li');
let title = document.querySelectorAll('.title');
let main = document.querySelector('main');
let technology = document.querySelectorAll('.technology');
let menuBar = document.querySelector('.bar-menu')
let buttonAside = document.querySelector('aside button')

aside.style.scrollbarWidth = 'none';

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            aside.style.marginLeft = '-100%';
        }
        e.preventDefault();
        item.classList.add('active');
        if (item.classList.contains('active')) {
            buttons.forEach(btn => {
                if (btn !== item) {
                    btn.classList.remove('active');
                }
            });
        }
        let name = item.innerHTML;

        title.forEach(item => {
            let nameTitle = item.innerHTML;

            if (name == nameTitle) {
                main.scrollTo({
                    top: item.parentElement.offsetTop,
                    behavior: 'smooth' // Certifique-se de que o comportamento suave esteja configurado
                });
            }
        });
    });
});

technology.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.background = 'white';
        item.style.color = '#a43f49';
        let path = item.querySelectorAll('svg path');
        path.forEach(item => {
            item.style.fill = '#a43f49';
            let svg = (item.parentElement.parentElement);
            svg.style.stroke = '#a43f49';
        });
    }
    );
    item.addEventListener('mouseout', () => {
        item.style.background = 'rgba(100, 100, 100, 0.3)';
        item.style.color = 'white';
        let path = item.querySelectorAll('svg path');
        path.forEach(item => {
            item.style.fill = 'white';
            let svg = (item.parentElement.parentElement);
            svg.style.stroke = 'white';
        });
    });
});

menuBar.addEventListener('click', () => {
    aside.style.marginLeft = '0';
})

buttonAside.addEventListener('click', () => {
    aside.style.marginLeft = '-100%';
});