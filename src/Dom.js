import htmlTag from './htmlTag';

const main = htmlTag('div', 'main', 'main', 'main');
document.body.appendChild(main);
main.innerHTML = 'hello';


export { main as default };