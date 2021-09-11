const elForm = document.querySelector("#form")
const elInput = document.querySelector("#input")
const resultPerson = document.querySelector(".person")
const resultBicycli = document.querySelector(".bicycli")
const resultCar = document.querySelector(".car")
const resultPlane = document.querySelector(".plane")
const elBtn = document.querySelector(".btn")
const elTitle = document.querySelector("#title")


//score

personScore = 3.6;
bicycliScore = 20.1;
carScore = 70;
planeScore = 800;

elForm.addEventListener("submit",function(evt){
    evt.preventDefault()
    let inputResult = Number(elInput.value)
    
    
    if(inputResult >= 0 && !isNaN (inputResult)){
        elTitle.textContent = "Who gets ahead faster"

        //person
        let hourPerson = Math.floor(elInput.value / personScore) + " " + "Hour";
        let minutePerson = (((elInput.value / personScore).toFixed(2) - Math.floor(elInput.value / personScore))
        *60).toFixed(0) + ' ' + "Minute";
        
        resultPerson.innerHTML = "Person" + " </br>" + hourPerson + ' </br> ' + minutePerson
        
        // Bicycli
        let hourBicycli = Math.floor(elInput.value / bicycliScore) + " " + "Hour";
        let minuteBicycli = (((elInput.value / bicycliScore).toFixed(2) - Math.floor(elInput.value / bicycliScore))
        *60).toFixed(0) + ' ' + "Minute";
        
        resultBicycli.innerHTML ="Bicycle" + "</br>" + hourBicycli + ' </br> ' + minuteBicycli

        //Car

        let hourCar = Math.floor(elInput.value / carScore) + " " + "Hour";
        let minuteCar = (((elInput.value / carScore).toFixed(2) - Math.floor(elInput.value / carScore))
        *60).toFixed(0) + ' ' + "Minute";
        
        resultCar.innerHTML ="Car" + "</br>" + hourCar + ' </br> ' + minuteCar   


        //Plane
        let hourPlane = Math.floor(elInput.value / planeScore) + " " + "Hour";
        let minutePlane = (((elInput.value / planeScore).toFixed(2) - Math.floor(elInput.value / planeScore))
        *60).toFixed(0) + ' ' + "Minute";
        
        resultPlane.innerHTML = "Plane" + "</br>" + hourPlane + ' </br> ' + minutePlane
        
        elInput.style.borderColor = "green";

        elInput.value = null;
    }else if (isNaN){
        elInput.style.borderColor = "red";
        elTitle.textContent = "Raqam kiriting"
    }
})