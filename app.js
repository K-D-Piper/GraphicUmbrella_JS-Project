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