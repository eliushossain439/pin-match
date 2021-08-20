// generate pin 
function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const stringPin = pin + ''
    if (stringPin.length == 4) {
        return pin
    } else {
        return getPin()
    }
}
function genaratPin() {
    const pin = getPin()
    document.getElementById('generatInput').value = pin
}

// calculate pin
function keyPad(event) {
    const keyText = event.target.innerText
    const inputValue = document.getElementById('inputValue')
    if (isNaN(keyText)) {
        if (keyText == 'C') {
            inputValue.value = ''
        }
    } else {
        const pinNumber = inputValue.value + keyText
        inputValue.value = pinNumber
    }
}
// pin number match
function pinMatch() {
    const genaratId = document.getElementById('generatInput')
    const calPinId = document.getElementById('inputValue')
    const genaratIdValue = genaratId.value
    const calPinIdValue = calPinId.value
    const errorNotify = document.getElementById('errorNotify')
    const showNotify = document.getElementById('showNotify')
    if (genaratIdValue == calPinIdValue) {
        showNotify.style.display = 'block'
        errorNotify.style.display = 'none'
    } else {
        errorNotify.style.display = 'block'
        showNotify.style.display = 'none'
    }

}