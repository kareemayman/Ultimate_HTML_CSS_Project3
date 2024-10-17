const scrollButton = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', e => {

    const scrollPos = window.scrollY

    if (scrollPos >= 200) {

        scrollButton.classList.remove('invisible')
    } else {

        scrollButton.classList.add('invisible')
    }
})

scrollButton.addEventListener('click', e => {

    window.scrollTo({
        
        top: 0,
        behavior: "smooth",
    })
})