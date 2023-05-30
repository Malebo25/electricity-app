function Electricity(availUnits,spent,bought) {
  let unitsAvailable = availUnits||0;
  let electricityUsage = {
    R10: 0,
    R50: 0,
    R20: 0,
  };
  let amountSpent = spent || 0;
  let boughtUnits = bought||0;

  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };

  function topUpElectricity(amount) {
    
    if (amount === 10) {
      unitsAvailable += 7;
      electricityUsage["R10"]++;
      amountSpent += 10;
      boughtUnits +=7;
    } else if (amount === 20) {
      unitsAvailable += 14;
      amountSpent += 20;
      electricityUsage["R20"]++;
      boughtUnits += 14;
    } else if (amount === 50) {
      unitsAvailable += 35;
      amountSpent += 50;
      electricityUsage["R50"]++;
      boughtUnits += 35;
    } else if (amount === "advance") {
      if (electricityUsage["advance"] === undefined) {
        unitsAvailable += 21;
        electricityUsage["advance"] = 1;
      } else {
        return false;
      }
    }
  }

  /*
   * return true and substract from unit available if there is enough units to use the appliance
   * other wise return false and do nothing.
   */
  function useAppliance(appliance) {
    if (unitsAvailable) {
      if (unitsAvailable >= 10) {

        if (appliance == "Stove") {
            

          unitsAvailable -= appliances["Stove"];
          return true;
        }
        // else {
        //   return false;
        // }
        
      }
      else if (unitsAvailable >= 13) {
        
        
        if (appliance === "Fridge") {
          unitsAvailable -= appliances["Fridge"];
          return true;
          
        }
        // else {
        //   return false
        // }
      }
  
      else if (unitsAvailable >= 5) {
        if (appliance === "Kettle") {
          unitsAvailable -= appliances["Kettle"];
          return true;
        }
        // else {
        //   return false;
        // }
  
      }
      else if (unitsAvailable >= 3) {
        if (appliance === "TV") {
          unitsAvailable -= appliances["TV"];
          return true;
        }
        // } else {
        //   return false;
        // }
      }
      return true;
    }
    return false;
      
    
  }

  function getUnitsAvailable() {
    
    return unitsAvailable;
  }
  function advanceTaken() {
    if (electricityUsage["advance"]) {
      return true;
    }
    else {
      return false;
    }
  }

  function totalAmountSpent() {
    return amountSpent;
  }

  function totalUnitsBought() {
    return boughtUnits;
  }

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
  };
}
