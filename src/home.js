export let home = () => {
    let location = document.getElementById('tab-data')
    // Remove any other data
    while(location.firstChild){
        location.removeChild(location.lastChild)
    }
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

    location.appendChild(hero)

    let copy = document.createElement('div')
    copy.id = 'copy'

    let copyTitle = document.createElement('h3')
    copyTitle.textContent = 'So few have experieced...'
    copy.appendChild(copyTitle)

    let copyParagraph = document.createElement('p')
    copyParagraph.textContent = `Our one of a kind experience is that which cannot beheld. We are the pinnacle of all food creationg.
    Some cower in fear over what might happen to their pallets. To try one dish from our 42 course meal
    will be enough to bring you to tears. Many have died by the end. You have been warned.`
    copy.appendChild(copyParagraph)

    location.appendChild(copy)
}