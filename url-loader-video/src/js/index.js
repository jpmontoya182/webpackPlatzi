import "@babel/polyfill";
import '../css/styles.css'

import { delayedMessage, entranceMessage } from './message'
import platziImg from '../images/platzi.png'
import platziVideo from '../videos/que-es-core.mp4'

((name) => console.log(name))('Juanes')
delayedMessage();
document.write(entranceMessage); 

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '35%')
img.setAttribute('heigth', '35%')
document.body.appendChild(img)

const video = document.createElement('video')
video.setAttribute('src', platziVideo)
video.setAttribute('width', '480')
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.appendChild(video)