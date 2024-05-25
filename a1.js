/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: HARLEEN KAUR Student ID: 154157234 Date:24/05/2024
********************************************************************************/


console.log("Hello World");

// array stored  as global variable
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const stdName = "Harleen Kaur"; // storing name and email in constant variable so that we do not have to change every where when needed.
const stdEmail = "harleen-kaur28@myseneca.ca";
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    `This course name is WEB700. This assignment was prepared by  ${stdName}`,
    `Contact Information:${stdEmail}\n${stdName}`,
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];
        
// For HTTP request 
function httpRequest(httpVerb, path){
    for (let i=0; i < serverPaths.length; i++){
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}


//testing our hhtpRequest function with different request method 
console.log(httpRequest("GET","/"));
console.log(httpRequest("GET","/about"));
console.log(httpRequest("GET","/contact"));
console.log(httpRequest("POST","/login"));
console.log(httpRequest("GET","/panel"));
console.log(httpRequest("POST","/logout"));
console.log(httpRequest("PUT","/"));


//Generate random positive number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// Send random request at intervals
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}


automateTests();

