const calculateButton = document.querySelector("#calculateButton");
      const resetButton = document.querySelector("#resetButton");
      const ageInput = document.querySelector("#age");
      const prevBalanceInput = document.querySelector("#prevBalance");
      const spouseBeneficiaryInput = document.querySelector("#spouseBeneficiary");
      const rmdAmountOutput = document.querySelector("#rmdAmount");

      function calculateRMD() {
        const age = ageInput.value;
        const prevBalance = prevBalanceInput.value;
        const spouseBeneficiary = spouseBeneficiaryInput.checked;

        let divisor;
        if (spouseBeneficiary) {
          divisor = 1.1;
        } else {
          divisor = 1.2;
        }

        const rmdAmount = (prevBalance / divisor) * (1 / (27.4 - age));

        rmdAmountOutput.textContent = rmdAmount.toFixed(2);
      }

      function resetInputs() {
        ageInput.value = "";
        prevBalanceInput.value = "";
        spouseBeneficiaryInput.checked = false;
        rmdAmountOutput.textContent = "";
      }

      calculateButton.addEventListener("click", calculateRMD);
      resetButton.addEventListener("click", resetInputs);