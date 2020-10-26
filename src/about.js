export let about = () => {
    let location = document.getElementById('tab-data')
    let header = document.createElement('h3')
    header.textContent = 'About Us'
    location.appendChild(header)
    let copy = document.createElement('p')
    copy.innerHTML = `We are a restauraunt. One which you want to go to.<br>We believe ourselves to be the
    best of the best. Here is to enjoying our food as much as we do.<br>Contact us at: +1(555)555-5555. Thank you.`
    location.appendChild(copy)
}