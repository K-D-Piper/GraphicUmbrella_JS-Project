//? This will grab the entire element by the ID name
//* ex. <h3 id= "serviceHeading"> AMAZING </h3>
let serviceHeading = document.getElementById("serviceAmazing");

console.log(serviceHeading);

//? Grabbing the id by multiple elements by className
let serviceElements = document.getElementsByClassName("serviceIcons")
//* Makes an array with all the elements with the specified classname
console.log(serviceElements);

//? Grabbing the element by css selection 
let serviceSupport = document.querySelector(".amazingIcon p")

console.log(serviceSupport)

//? Grabbing all teh elements by css selection 
let serviceColumns = document.querySelectorAll(".serviceIcons p")
console.log(serviceColumns)

//? Modify Elemetns section 

//* if we want to add text use .innerHTML 
serviceHeading.innerHTML = "AMAZING" 

//? changing the text for a specific index in a NODECollection 
serviceColumns[1].innerHTML = "Pizza" ; 

//function styleCenter(){
//    for (let i = 0; i< serviceColumns.length; i++){
//        const element = serviceColumns[i];
//
//        serviceColumns[i].style.textAlign = "center";
//    }
//
//}
//
//styleCenter();


//? Styling elements
//*https://www.w3schools.com/jsref/dom_obj_style.asp 
//* If you lkook up styling property it shuld give you teh javasscfript syntax 
//serviceSupport.style.color = "green"
//serviceSupport.style.fontSize = "60px"

//? Event Listeners 

let serviceImageOne = document.querySelector(".amazingIcon img")

console.log(serviceImageOne);

serviceImageOne.addEventListener("click", onImagePress)

//serviceImageOne.addEventListener("mouseover", onImagePress)

function onImagePress() {
    console.log("Hey ya pressed me!")
}

let servicesText = document.querySelectorAll(".services h3")

console.log(servicesText);

function stylingText() {
    for (let i = 0; i < servicesText.length; i++) {
        const element = servicesText[i];

        servicesText[i].style.color = "green" ; 
        servicesText[i].style.fontSize = "60px";
    }
}

serviceImageOne.addEventListener("click", stylingText);


//These are my edits. Pray for me. 

//revert pizza back to og word
serviceColumns[1].innerHTML = "Availability" ; 

//if img clicked, change the logos-small nav text to blue 


//if hovered over 'Portfolio' console.log ("Ima Mr.Portfolio")



//change backgrounds of all the buttons from green to purple 

function onImagePress() {
    addEventListener("click", (event) => {});

    onclick = (event) => {};
}




//when the images from the portfolio section are clicked, change the subheading font to 60px

let logoSmall =
serviceSupport.style.color = "purple"
serviceSupport.style.fontSize = "60px"

//8/23/2024 Active Instruciton 

//if mobile is clicked tuurn nav text blue. 

/* sevearal ways to do this. Since already has a class add class name*/

//THIS IS THE MOBILE IMG NODE (node means element)
let mobileImg = document.querySelector(".mobileImg")
//arrow functins. A way to way functions if you dont want to make a function name
mobileImg.addEventListener("click" , () => {
    //? THIS IS AN ARRAY LIST OF all the "a" tags in the header
    let navTExt = document.querySelectorAll("nav a")
    console.log(navText);
    
    for (let i = 0; i < navTExt.length; i++) {
        const currentText = navTExt[i];

        navText[i].style.color = "blue" ; 
    }
})

//(2) make pizza into something else 
serviceColumns[2].innerHTML = "Design";

//? Grabbing a elements text value;
let webTitle = document.querySelector(".webIcon h3").
innerText;
//? This way works too
//* webTitle.innerText

console.log(webTitle)

//! Console.log("I'ma Mr. Portfolilo") if hovered over portfolio word on website 

let portfolio = document.getElementById("portfolioText");
console.log(portfolioJSText)

function mrPortfolio(){
    console.log("I'ma Mr.Portfilio!");
}

portfolioJSText.addEventListener("mouseover" , mrPortfolio)

//! 4.

let greenPortfolioTags = document.querySelectorAll(".greenBoxSpan span p");
console.log(greenPortfolioTags);

//? HOW TO CHANGE THE BACKGROUND FOR THESE ELEMENTS V
//greenPortfolioTags[0].style.backgroundColor = "purple"

function purpleTags () {
    for (let i = 0; i < greenPortfolioTags.length; i++) {
        const element = greenPortfolioTags[i];
        greenPortfolioTags[i].style.backgroundColor = "purple"

    }   
}

purpleTags();

//! 5. 

let mooImage = document.querySelector(".whiteBox img");
console.log(mooImage[1]);

mooImage[1].addEventListener("click" , () => {
    let portfolioHeaders = document.querySelectorAll(".greenBoxSpan h3");
    console.log(portfolioHeaders);

    for (let i = 0; index < portfolioHeaders.length; i++) {
        const element = portfolioHeaders[index];
        
        portfolioHeaders[i].style.fontSize = "60px";
    }
})

//#region
//#endregion 

//! Input boxes 
//Grabbing values
//? onchanges
//? 

//EventListener


//? Saving info based onChange
// let inputName = document.getElementById("name")
// //* Created this variable to save input values 
// let savedInfo = " ";

// console.log(inputName)

// inputName.addEventListener("input" ,() => {
//     //? this is grabbing the inputBoxes values
//     //! INNERTEXT IS ONLY FOR HTML text Tags 


//     let currentInput = inputName.value; //each time there is a keystroke this varibale updates every time 
//     savedInfo = currentInput;
//     console.log(savedInfo);
// } )

// //! 2nd option on saving information from a input textbox

// //? THIS cariable is being used to grab the imput value 
// let inputEmail = document.querySelector("#email");
// //* this variable is being used for the eventListener
// let subsribeButton = document.querySelector(".subscribe input");
// let savedEmailInfo = "";

// subsribeButton.addEventListener("click" , () => {

//     savedEmailInfo = inputEmail.value;
//     //? 
//     inputEmail.value = "";
//     console.log(savedEmailInfo);
// })

//control / is how you comment out a large group of text 

//! Saving Perosnal Information 
//? This is going to hold my detial object of informtiaon 
let subscribeList = [];
//? This is my object Tempate to push into the array later
let personInfo = {
    name: "" , 
    email: ""
}; 

//? This is going to grab the input text
//! ONLY GRAB THE VALUE NOT THE NODE ELEMENT (BC WE HAVE ".value after the dom selection" ) 
let inputName = document.querySelector("#name").value;
let inputEmail = document.querySelector("#email").value;
//? What's going to activae our input variables to grab the values? 
//* This variable is going to be used for my eventlistener 
let subsribeButton = document.querySelector(".subsribe input");

subscribeButton.addEventLilstener("click" , grabNewsLetterInfo)

function grabNewsLetterInfo(){
    //? These variables is going to grab the input NODES
    //! ONLYL GRAB THE VALUE NOT THE NODE ELEMETN (BC we )
    personInfo.name = inputName.value
    personInfo.email = inputEmail.value
    console.log(personInfo);

    subscribeList.push(personInfo);
    console.log(subscribeList)


    //? Clearing out the input boxes 
    inputName = "";
    inputEmail = "";
}

//if you ever need to get an inner text use . valu eotheriwse use entertext 
//innertext grabs other values 
//dots/periods for class names ; # are for id section

//Arrow fucnitons need to be inside something. Or anynomnous functions. Best case is to use them for one use. ARROW FUNCITONS HAVE NO NAMES. SINGLE USE FUNCTION 
// to clarifiy above furher. For a fucntion to work it needs some kind of call. its your trap cards. Arrow funciton sets your trap card first, reguar funcitons call it later. 
/* QUESTIONS SECTION */

//What parts style choice and what parts necessary. So for example, can i write an arrow funciton like this ("click" , () => {}) (with no space for seperatin / not putting it on another line)

//further clarifiy the differences of scopes 

//EXPALIN WHY VARIBALES INSIDE FUCTION VS OUTSIDE FUNCITON 
