const scrollButton = document.querySelector('.scroll-to-top')

const skills = document.querySelectorAll('.skills .statistic div')

let clients = document.querySelector('.stats .stat:first-of-type h1')

let projects = document.querySelector('.stats .stat:nth-of-type(2) h1')

let countries = document.querySelector('.stats .stat:nth-of-type(3) h1')

let money = document.querySelector('.stats .stat:last-of-type h1')

window.addEventListener('scroll', e => {

    const scrollPos = window.scrollY

    // Scroll-To-Top Button
    if (scrollPos >= 200) {

        scrollButton.classList.remove('invisible')
    } else {

        scrollButton.classList.add('invisible')
    }

    // Statistics
    if (scrollPos >= 7400) {

        skills.forEach(skill => {

            const prog = skill.dataset.prog

            const span = skill.querySelector('span')

            span.style.width = prog
        })
    }

    // Stats Counting Up Effect
    if (scrollPos > 12000 && countries.textContent == 0) {

        countUp(clients, 150)
        countUp(projects, 135)
        countUp(countries, 50)
        countUp(money, 500)

    }
})

// Scroll-To-Top Button
scrollButton.addEventListener('click', e => {

    window.scrollTo({

        top: 0,
        behavior: "smooth",
    })
})

// Creating The Countdown Timer
const nextYear = new Date()

nextYear.setFullYear(nextYear.getFullYear() + 1, 0, 1)

nextYear.setHours(0, 0, 0)

let currentDate = new Date()

let countDown, days, remainingTime, hours, mins, secs


// Manipulating the DOM
const daysHeader = document.querySelector('.clock .days h1')
const hoursHeader = document.querySelector('.clock .hours h1')
const minsHeader = document.querySelector('.clock .minutes h1')
const secsHeader = document.querySelector('.clock .seconds h1')

setInterval(() => {

  currentDate = new Date()

  countDown = nextYear - currentDate

  days = Math.trunc(countDown / 1000 / 60 / 60 / 24)

  remainingTime = countDown / 1000 / 60 / 60 / 24 - days

  hours = Math.trunc(remainingTime * 24)

  remainingTime = remainingTime * 24 - hours

  mins = Math.trunc(remainingTime * 60)

  remainingTime = remainingTime * 60 - mins

  secs = Math.trunc(remainingTime * 60)

  daysHeader.textContent = days < 10 ? `0${days}` : days

  hoursHeader.textContent = hours < 10 ? `0${hours}` : hours

  minsHeader.textContent = mins < 10 ? `0${mins}` : mins

  secsHeader.textContent = secs < 10 ? `0${secs}` : secs

}, 1000)

const eventName = document.querySelector('.events .info > h1')

eventName.textContent = `Tech Masters Event ${nextYear.getFullYear()}`

// Stats Counting Effect Function
function countUp(e, limit) {

    let i = 0

    let intervalId = setInterval(() => {
        
        e.textContent = i

        i++

        if (i > limit) clearInterval(intervalId)

    }, 2000 / limit);
}