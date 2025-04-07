const paragraphs = document.querySelectorAll('p');  
if (paragraphs.length > 0) {  
    paragraphs[0].textContent = 'Hello World!';  
}  
const myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});
const myButton = document.getElementById('change-user');
const myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Будь ласка, введіть ваше ім’я');
    if (!myName) {
        setUserName(); // Повторний запит, якщо ім’я не введено
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.addEventListener('click', function() {
    setUserName();
});