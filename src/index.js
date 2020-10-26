import {home} from './home.js'
// Seems like a cop out. Have to find a better way to do this.
// Oh duh. They told me to make a click handler... not directly 
// attribute it to the click
// window.home = home

let index = (() => {
    let content = document.getElementById('content')
    // HERO
    let hero = document.createElement('div')
    hero.id = 'hero'

    let heroText = document.createElement('div')
    heroText.id = 'hero-text'

    let title = document.createElement('h1')
    title.innerHTML = '3 &frac14; Star Restaurant'
    heroText.appendChild(title)

    let subtitle = document.createElement('h2')
    subtitle.textContent = 'Where flavor meets tongue'
    heroText.appendChild(subtitle)

    let image = document.createElement('img')
    image.src = 'chef-picture.jpg'
    hero.appendChild(image)
    hero.appendChild(heroText)

    content.appendChild(hero)

    // TABMENU
    let tabMenu = document.createElement('div')
    tabMenu.id = 'tab-menu'

    let tabHome = document.createElement('div')
    tabHome.id = 'home'
    tabHome.textContent = 'Home'
    tabHome.setAttribute('class', 'selected')
    tabHome.addEventListener('click', () => clickHandler('home'))

    let tabFood = document.createElement('div')
    tabFood.id = 'menu'
    tabFood.textContent = 'Menu'
    tabFood.addEventListener('click', () => clickHandler('menu'))

    let tabAbout = document.createElement('div')
    tabAbout.id = 'about'
    tabAbout.textContent = 'About'
    tabAbout.addEventListener('click', () => clickHandler('about'))

    tabMenu.appendChild(tabHome)
    tabMenu.appendChild(tabFood)
    tabMenu.appendChild(tabAbout)
    content.appendChild(tabMenu)

    let tabData = document.createElement('div')
    tabData.id = 'tab-data'
    content.appendChild(tabData)
    home()
})()

let clickHandler = (tabName) => {
    if(tabName == 'home') {
        home()
    } else if(tabName == 'about') {
        about()
    } else if(tabName == 'menu') {
        menu()
    }
}

