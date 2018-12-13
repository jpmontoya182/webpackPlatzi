import "@babel/polyfill";
import { delayedMessage, entranceMessage } from './message.js'
import platziImg from './images/platzi.png'

((name) => console.log(name))('Juanes')
delayedMessage();
document.write(entranceMessage); 

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '35%')
img.setAttribute('heigth', '35%')

document.body.appendChild(img)