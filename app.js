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