const renderToDOM = require('./render-to-dom.js');

const waitTime = new Promise((success, error) => {
    setTimeout(() => {
        success('The request finished successfully')
    }, 3000);
});

module.exports = {
    entranceMessage : "This is the first message from my message module.", 
    delayedMessage : async () => {
        const element = document.createElement('p');        
        const message = await waitTime;
        const textElement = document.createTextNode(message) 
        element.appendChild(textElement);
        renderToDOM(element);
    }
}
