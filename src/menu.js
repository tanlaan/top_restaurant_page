export let menu = () => {
    let location = document.getElementById('tab-data')
    let list = document.createElement('ul')

    let chicken = document.createElement('li')
    chicken.textContent = 'Bordeaux Chicken in a tallow whipped cream sauce'
    list.appendChild(chicken)

    let beef = document.createElement('li')
    beef.textContent = 'Brisket wrapped in 8 year ham trimmings laid in a basket of freeze dried mushrooms'
    list.appendChild(beef)

    let fish = document.createElement('li')
    fish.textContent = 'Halibut trimmed to the bone and reshaped with a halibut chowder filling and flaky crust'
    list.appendChild(fish)

    location.appendChild(list)
}