// DOM element(s) references
const radioBTN = document.querySelector(".topup");
const buyBTN = document.querySelector(".topupNow");
const availableUnits = document.querySelector(".unitsAvailable");
const spentAmount = document.querySelector(".totalAmount");

// Factory Function instance
const electricity = Electricity(Number(localStorage.getItem("UnitsNow")),Number(localStorage.getItem("SpentAmount")));
availableUnits.innerHTML = electricity.getUnitsAvailable();
localStorage.getItem("UnitsNow");

spentAmount.innerHTML = electricity.totalAmountSpent();
localStorage.getItem("SpentAmount");
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

  localStorage.setItem("UnitsNow", Number(electricity.getUnitsAvailable()));
  localStorage.setItem("SpentAmount", Number(electricity.totalAmountSpent()));
});
