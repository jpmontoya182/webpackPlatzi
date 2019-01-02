import "@babel/polyfill";
import '../css/styles.css'
import datos from './teacher.json'
import { delayedMessage, entranceMessage } from './message'
import platziImg from '../images/platzi.png'

import Teachers from './components/teachers.js'
import '../css/main.less'

import { render } from 'react-dom'
import React, { Component } from 'react';


$button = document.getElementById('dynamic-imports')
$button.addEventListener(click, async ()=>{
    const { default : alertJP } = await import('./alertJP.js');
    alertJP()
})

const homeContainer = document.getElementById('container');
render(<Teachers data={datos} />, homeContainer)

delayedMessage();
document.write(entranceMessage); 

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '35%')
img.setAttribute('heigth', '35%')

document.body.appendChild(img)
