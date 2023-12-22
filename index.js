'use strict';
const nav = document.querySelector('.nav-mobile');
const ham = document.querySelector('.header__ham');
const nav_item = document.querySelectorAll('.nav-mobile__item a');
ham.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        nav_item.forEach((item, i) => {
            item.classList.remove('active');
            item.style.transitionDelay = 0;
        })
        ham.classList.remove('active');
    }
    else {
        nav.classList.add('active');
        nav_item.forEach((item, i) => {
            item.classList.add('active');
            item.style.transitionDelay = `${.5 + i / 10}s`;
        })

        ham.classList.add('active');

    }
})

const paths = document.querySelectorAll('path');
paths.forEach((path, i) => {
    path.style.animationDelay = `${0.17 * i}s`
})

gsap.to(".load", {
    keyframes: [
        {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power4.out"
        },
        {
            opacity: 0,
            y: "-100%",
            delay: .6,
            duration: .5,
            ease: "power4.out"
        },
    ],
    stagger: .05,
    duration: 1.6,
    delay: .3,
}
)
gsap.to(".delete", {
    keyframes: [{
        opacity: 0,
        ease: "power4.out",
        duration: 1.2,
    },
    {
        y: "-100vw",
        duration: .01,
    }
    ],
    delay: 2.2,
})

const work = document.querySelector('.work');
const header_title = document.querySelector('.header__title');
const work_title = document.querySelector('.work__title');
const scroll1 = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            work_title.classList.remove('active');
        }
        else {
            work_title.classList.add('active');
        }
    }
    )
}
let options1 =
{
    threshold: .2,
}
const observer1 = new IntersectionObserver(scroll1, options1);

observer1.observe(work);


const work_list = document.querySelector('.work__list');
const cards = document.querySelectorAll('.card');
const scroll2 = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            cards.forEach((card) => {
                card.classList.remove('active');
            }
            )
        }
        else {
            cards.forEach((card, i) => {
                card.classList.add('active');
                card.style.transitionDelay = `${.3 + i / 10}s`
            }
            )
        }
    }
    )
}

let options2 = {
    threshold: .1,
}
const observer2 = new IntersectionObserver(scroll2, options2);
observer2.observe(work_list);

const content = document.querySelector('.content');
const main = document.querySelector('.main');
const scroll_bg = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            content.classList.remove('active');
        }
        else {
            content.classList.add('active');
        }
    })
}

let options_bg = {
    threshold: .05,
}
const observer_bg = new IntersectionObserver(scroll_bg, options_bg);
observer_bg.observe(main);

const myself = document.querySelector('.myself');
const myself_title = document.querySelector('.myself__title');
const myself_text = document.querySelector('.myself__textarea');
const scroll3 = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header_title.classList.remove('none');
            myself_title.classList.remove('active');
            myself_text.classList.remove('active');
        }
        else {
            myself_title.classList.add('active');
            myself_text.classList.add('active');
            header_title.classList.add('none');
        }
    })
}
let options3 = {
    threshold: .1,
}
const observer3 = new IntersectionObserver(scroll3, options3);
observer3.observe(myself);

gsap.to(".load", {
    keyframes: [
        {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power4.out"
        },
        {
            opacity: 0,
            y: "-100%",
            delay: 1.2,
            duration: .5,
            ease: "power4.out"
        },
    ],
    stagger: .05,
    duration: 2.2,
    delay: .3,
}
)
gsap.to(".delete", {
    keyframes: [{
        opacity: 0,
        ease: "power4.out",
        duration: 1.2,
    },
    {
        y: "-100vw",
        duration: .01,
    }
    ],
    delay: 2.8,

})

