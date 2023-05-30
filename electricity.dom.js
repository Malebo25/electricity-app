// DOM element(s) references
const radioBTN = document.querySelector(".topup");
const buyBTN = document.querySelector(".topupNow");
const availableUnits = document.querySelector(".unitsAvailable");
const spentAmount = document.querySelector(".totalAmount");
const unitsBought = document.querySelector(".totalUnits");
const appliance = document.querySelector(".usage");
const useBtn = document.querySelector(".useNow");
// Factory Function instance
const electricity = Electricity(Number(localStorage.getItem("UnitsNow")),Number(localStorage.getItem("SpentAmount")),Number(localStorage.getItem("unitsBought")));

availableUnits.innerHTML = electricity.getUnitsAvailable();
localStorage.getItem("UnitsNow");

spentAmount.innerHTML = electricity.totalAmountSpent();
localStorage.getItem("SpentAmount");

unitsBought.innerHTML = electricity.totalUnitsBought();
localStorage.getItem("unitsBought");


// DOM events here
buyBTN.addEventListener("click", function () {
  var checkedradioBtn = document.querySelector(
    "input[name='buyElectricity']:checked"
  );
  let Availamount = checkedradioBtn.value;
  if (Availamount !== "advance") {
    Availamount = Number(checkedradioBtn.value);

    electricity.topUpElectricity(Availamount);
    availableUnits.innerHTML = electricity.getUnitsAvailable();
  } else {
    electricity.topUpElectricity(Availamount);
    availableUnits.innerHTML = electricity.getUnitsAvailable();
  }
   spentAmount.innerHTML = electricity.totalAmountSpent();
   unitsBought.innerHTML = electricity.totalUnitsBought();

  localStorage.setItem("UnitsNow", Number(electricity.getUnitsAvailable()));
   localStorage.setItem("SpentAmount", Number(electricity.totalAmountSpent()));
   localStorage.setItem("unitsBought", Number(electricity.totalUnitsBought()));
   
});
useBtn.addEventListener("click", function () {
   var applianceradioBTN = document.querySelector(
     "input[name='useElectricity']:checked"
   );
   let applianceUse = applianceradioBTN.value;
   if (availableUnits.innerHTML > 0) {
      
      if (applianceUse === "stove") {
         availableUnits.innerHTML-=10
   
         
      }
      if (applianceUse === "TV") {
          availableUnits.innerHTML -= 3
      }
      if (applianceUse === "Fridge") {
          availableUnits.innerHTML -= 13;
      }
      if (applianceUse === "Kettle") {
          availableUnits.innerHTML -= 5;
      }
   }
    localStorage.setItem("UnitsNow", Number(electricity.getUnitsAvailable()));
    localStorage.setItem("SpentAmount", Number(electricity.totalAmountSpent()));
    localStorage.setItem("unitsBought", Number(electricity.totalUnitsBought()));
   

});
