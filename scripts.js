// scripts.js

/********************************
 COOKIE clicker
 ********************************/
// default value declaration
let cookieCount = 0;


// DOM declarations
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');


cookieCounter.innerHTML = cookieCount;
// everytime a user clicks the button, their cookies are increased by the value of the their clickPower
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount();
})


// updating the cookie count
let refreshCookieCount = function () {
    cookieCounter.innerHTML = cookieCount;
}


/********************************
    
        Click Power
    
 ********************************/
// defaults
let clickPower = 1;
let clickPowerPriceAmount = 5;
let clickPowerLevelNumber = 1;

// DOM declarations
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

// Buy click power

buyClickPower.addEventListener("click", function () {
    if (cookieCount >= clickPowerPriceAmount) {
        console.log("Item succesfully Bought");
        
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        
        // clickPowerLevel +=1;
        refreshCookieCount();

        // upgrade  level 
        clickPowerLevelNumber += 1;

        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        //Update click power
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

        //update Click Power
        clickPower += 1;

        // refresh shop item
        refreshPowerClick();
    } else {
        notEnoughCookies();
    }

});



//  updating the click power level
let refreshPowerClick = function () {
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerMultiple.innerHTML = clickPower;
}

/********************************
 
            GRANDMAS

 ********************************/

//set default values
let grandmaPower = 50; // 50
let grandmaPriceAmount = 500; // 500
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');


//buy a grandma
buyGrandma.addEventListener("click", function () {
    //make sure we have enough cookies and subtract our cookies from the price
    if(cookieCount >= grandmaPriceAmount){
        
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();

        //upgrade power level
        grandmaLevelNumber += 1;

        //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
        //update grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

        //turn autoGrandma on!
        autoGrandma = true
        autoGrandmaStart();


        //refresh shop item
        refreshGrandma();
    } else {
        notEnoughCookies();
    }
});

// refresh Grandmas
const refreshGrandma = () => {
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;// alert the user they bought some grannies
    let numOfMilliSecs = 1000;
    // alert the user they bought some grannies
    setTimeout(() => {
        alert('You bought some grandmas on the black market!');
    }, numOfMilliSecs);

};

// Game loop
const autoGrandmaStart = () => {
    const numOfMilliSecs = 1000;
    let grandmaInt = window.setInterval(() => {
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, numOfMilliSecs);
};


/********************************

          Facilities

********************************/

//set default variables
let facilityAuto = false;
let facilityPower = 1000;
let facilityPriceAmount = 10000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function () {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()

        //upgrade power level
        facilityLevelNumber += 1;

        //update price
        facilityPriceAmount += 500 + Math.floor(facilityPriceAmount * 1.33);

        //update facility power
        facilityPower += 500;

        //turn autoFacility on!
        facilityAuto = true
        autoFacilityStart();

        //refresh shop item
        refreshFacility();
    } else {
        notEnoughCookies();
    }
})

//refresh shop
const refreshFacility = function () {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 500;
}

// game loop
const autoFacilityStart = function () {
    const numOfMilliSecs = 1000;
    let facilityInt = window.setInterval(function () {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, numOfMilliSecs);
}


// Letting the user know there is no enough cookies in the store
const notEnoughCookies = function () {
    alert("You don't have enough cookies");
};