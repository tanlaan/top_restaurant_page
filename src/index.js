import {home} from './home.js'
let index = (() => {
    let content = document.getElementById('content')
    let tabMenu = document.createElement('div')
    tabMenu.id = 'tab-menu'
    content.appendChild(tabMenu)

    let tabData = document.createElement('div')
    tabData.id = 'tab-data'
    content.appendChild(tabData)
    home()
})()

