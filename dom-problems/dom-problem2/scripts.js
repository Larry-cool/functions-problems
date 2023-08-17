/*
Problem 2: Create a P element with a link inside. 
Then, write a JavaScript function to get the HREF attribute of the link.

*/

const p1 = document.getElementById('p1');

let pLink = document.getElementById('link');

function getLink(){
    const linkUrl = pLink.getAttribute('href');
     p1.innerHTML = linkUrl;
} 