function generateRandomChar() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
}


let currentString = '';


function generateRandomString() {
    const numChars = Math.floor(Math.random() * 3); 
    currentString = '';
    for (let i = 0; i < numChars; i++) {
        currentString += generateRandomChar();
    }
    document.getElementById('container').textContent = currentString;
}


window.addEventListener('keyup', function(e) {
    console.log(e.key);  

    
    if (e.key === currentString[0]) {
        currentString = currentString.slice(1);  
        document.getElementById('container').textContent = currentString;
    }

    
    add_new_chars();
});


function add_new_chars() {
    const randomNum = Math.floor(Math.random() * 3) + 1; 
    for (let i = 0; i < randomNum; i++) {
        currentString += generateRandomChar();
    }
    document.getElementById('container').textContent = currentString;
}


document.addEventListener("DOMContentLoaded", function () {
    generateRandomString();
});