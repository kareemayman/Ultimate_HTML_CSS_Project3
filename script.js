const scrollButton = document.querySelector('.scroll-to-top')

const skills = document.querySelectorAll('.skills .statistic div')

window.addEventListener('scroll', e => {

    const scrollPos = window.scrollY

    if (scrollPos >= 200) {

        scrollButton.classList.remove('invisible')
    } else {

        scrollButton.classList.add('invisible')
    }

    if (scrollPos >= 7400) {

        skills.forEach(skill => {

            const prog = skill.dataset.prog

            const span = skill.querySelector('span')

            span.style.width = prog
        })
    }
})

scrollButton.addEventListener('click', e => {

    window.scrollTo({

        top: 0,
        behavior: "smooth",
    })
})