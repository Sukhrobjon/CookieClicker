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

        //Update click level
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

// Letting the user know there is no enough cookies in the store
const notEnoughCookies = function () {
    alert("You don't have enough cookies");
};

/********************************
 
            GRANDMAS

 ********************************/

