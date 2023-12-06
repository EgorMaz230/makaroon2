const slider = document.querySelector('.card-slider');
const topLayer = document.querySelector('.top_layer')
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cmpltBtn = document.querySelector('.cmplt-btn')
const slides = document.querySelectorAll('.card');
let cardNumber = document.querySelectorAll('.card_number')
let cardCV = document.querySelectorAll('.card_cv')
let cardName = document.querySelectorAll('.card_name')
let cardSurname = document.querySelectorAll('.card_surname')
let cardDate = document.querySelectorAll('.card_date')
const cardChangerNumber = document.querySelector('.card-changer_number')
const cardChangerCV = document.querySelector('.card-changer_cv')
let cardChangerName = document.querySelector('.card-changer_name')
let cardChangerSurname = document.querySelector('.card-changer_surname')
let cardChangerDate = document.querySelector('.card-changer_date')
const cross = document.querySelector('.fa-solid')
const cardCompleted = document.querySelector('.card-completed')

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`
}



cardChangerCV.addEventListener('click', () => {
    let rand = Math.floor(Math.random()*(999-100+1)+100)
    for (let i = 0; i < cardCV.length; i++) {
        cardCV[i].textContent = rand
    }
})
cardChangerNumber.addEventListener('click', () => {
    let rand = `${Math.floor(Math.random()*(9999-1000+1)+1000)} ${Math.floor(Math.random()*(9999-1000+1)+1000)} ${Math.floor(Math.random()*(9999-1000+1)+1000)} ${Math.floor(Math.random()*(9999-1000+1)+1000)}`
    for (let i = 0; i < cardNumber.length; i++) {
        cardNumber[i].textContent = rand
    }
})
cardChangerName.addEventListener('input', () => {
    for (let i = 0; i < cardName.length; i++) {
        cardName[i].textContent = cardChangerName.value
    }
})
cardChangerSurname.addEventListener('input', () => {
    for (let i = 0; i < cardSurname.length; i++) {
        cardSurname[i].textContent = cardChangerSurname.value
    }
})
cardChangerDate.addEventListener('input', () => {
    for (let i = 0; i < cardDate.length; i++) {
        cardDate[i].textContent = String(cardChangerDate.value).replace(/-/g, '.').slice(0, 7)
    }
})
cmpltBtn.addEventListener('click', () => { 
    topLayer.style.opacity = '1'
    topLayer.style.display = 'flex'
    console.log(currentIndex)
})
cross.addEventListener("click", function() {
    topLayer.style.opacity = '0'
    topLayer.style.display = 'none'
})
console.log(currentIndex)