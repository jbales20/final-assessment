const display = document.querySelector('#display')

const inputColor = document.querySelector("#input-color")
const inputSize = document.querySelector('#input-size')
const inputFont = document.querySelector('#select-font')
const inputBGColor = document.querySelector('#input-bg-color')
const inputText = document.querySelector('#enter-text')
const inputStyle = document.querySelector("#select-style")
const inputWeight = document.querySelector("#select-weight")
const inputSpacing = document.querySelector("#input-spacing")
const inputPadding = document.querySelector("#input-padding")


const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBG = document.querySelector('#show-bg-color')
const showWeight = document.querySelector('#show-weight')
const showStyle = document.querySelector('#show-style')
const showPadding = document.querySelector('#show-padding')
const showSpacing = document.querySelector('#show-spacing')


inputColor.addEventListener('change', handleInput);
inputSize.addEventListener('input', handleInput);
inputFont.addEventListener('input', handleInput);
inputBGColor.addEventListener('change', handleInput);
inputText.addEventListener('change', handleInput);
inputStyle.addEventListener('change', handleInput);
inputWeight.addEventListener('change', handleInput);
inputSpacing.addEventListener('input', handleInput);
inputPadding.addEventListener('input', handleInput);

function handleInput() {
    const fontSize = inputSize.value + 'px'
    const fontColor = inputColor.value
    const fontBG = inputBGColor.value
    const font = inputFont.value
    const userText =inputText.value
    const weight = inputWeight.value
    const style =inputStyle.value 
    const spacing = inputSpacing.value
    const padding = inputPadding.value 
    
    display.style.fontStyle = style
    display.style.fontWeight = weight
    display.style.fontSize = fontSize
    display.style.color = fontColor
    display.style.backgroundColor  = fontBG
    display.style.fontFamily = font
    console.log(display.style.letterSpacing)
    console.log(spacing)
    display.style.letterSpacing   = spacing + "px"
    display.style.padding  = padding + "px"
    display.innerHTML = userText
    

    showSize.innerHTML = fontSize
    showColor.innerHTML = fontColor
    showBG.innerHTML = fontBG
    showFont.innerHTML = font
    showPadding.innerHTML = padding
    showSpacing.innerHTML = spacing
}