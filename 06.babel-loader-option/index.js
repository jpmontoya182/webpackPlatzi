import "@babel/polyfill";
import { delayedMessage, entranceMessage } from './message.js'

((name) => console.log(name))('Juanes')
delayedMessage();
document.write(entranceMessage); 