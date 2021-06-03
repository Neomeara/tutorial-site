// This is my main javascript page

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rocket-league.jpg') {
        myImage.setAttribute('src', 'images/rocket-league.gif');

    } else {
        myImage.setAttribute('src', 'images/rocket-league.jpg');
    }
}

// Custom stuff Start
function textalert() {
    alert("Hello this is a msg!");
} 

let para = document.querySelector('p');
para.onclick = textalert;

// Custom stuff end

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Please enter your name. ');
    if (!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Yo wassup, ' + myName;    
        
    }
    

}

    if (!localStorage.getItem('name'))
    {
        setUserName();
    }
    else
    {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Yo wassup ' + storedName;
    }

myButton.onclick = function() 
{
    setUserName();
}