import "@babel/polyfill";
import '../css/styles.css'
import datos from './teacher.json'

import { delayedMessage, entranceMessage } from './message'
import platziImg from '../images/platzi.png'

console.log(datos)

delayedMessage();
document.write(entranceMessage); 

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '35%')
img.setAttribute('heigth', '35%')

document.body.appendChild(img)
