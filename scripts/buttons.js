const button1X = document.createElement("button");

button1X.innerText = "1X";
button1X.classList.add("ytp-button");
button1X.style.verticalAlign = 'top';
button1X.style.fontSize = '2rem';

const button2X = button1X.cloneNode(true);
button2X.innerText = "2X";