setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')


function setClock() {
    
    
    const currentTime = new Date()
    const secondRotation = currentTime.getSeconds() / 60
    const minuteRotation = (secondRotation + currentTime.getMinutes()) / 60
    const hourRotation = (minuteRotation + currentTime.getHours) / 12
    
    
    
    setRotation(secondHand, secondRotation)
    setRotation(minuteHand, minuteRotation)
    setRotation(hourHand, hourRotation)

    
    
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()