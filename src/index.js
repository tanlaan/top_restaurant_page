import {home} from './home.js'
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

    let tabFood = document.createElement('div')
    tabFood.id = 'menu'
    tabFood.textContent = 'Menu'

    let tabAbout = document.createElement('div')
    tabAbout.id = 'about'
    tabAbout.textContent = 'About'

    tabMenu.appendChild(tabHome)
    tabMenu.appendChild(tabFood)
    tabMenu.appendChild(tabAbout)
    content.appendChild(tabMenu)

    let tabData = document.createElement('div')
    tabData.id = 'tab-data'
    content.appendChild(tabData)
    home()
})()

