// let catchUpCheckbox = document.getElementById("catch-up-checkbox");
// catchUpCheckbox.addEventListener("click", () => {
//   if (catchUpCheckbox.checked) {
//     catchUp.disabled = false;
//   } else {
//     catchUp.disabled = true;
//     catchUp.value = 0;
//   }
// });

function calculate() {
  let maxContribLimit = Number(
    document.getElementById("contribution-limit").value
  );
  let contribToDate = Number(
    document.getElementById("contribution-to-date").value
  );
  let remainingPayPeriods = Number(
    document.getElementById("remaining-pay-periods").value
  );
  let catchUpCheckbox = document.getElementById("catch-up-checkbox");

  let catchUp = +0;
  if (catchUpCheckbox.checked)
    catchUp = Number(document.getElementById("catch-up").value);
  //   let catchUp = document.getElementById("catch-up");

  // Check if catch-up checkbox is checked
  let catchUpValue = catchUp.value || 0;
  // Calculate the maximum contribution limit
  let maxContribLimit50Plus = catchUpValue;
  let maxContribLimitTotal = maxContribLimit + maxContribLimit50Plus;

  // Calculate the maximum contribution per pay period
  let maxContribPerPayPeriod =
    (maxContribLimitTotal - contribToDate) / remainingPayPeriods;

  // Calculate the amount remaining to max contribution
  let amountRemaining = maxContribLimitTotal - contribToDate;

  // Format the results to two decimal places and display them in the output fields
  document.getElementById("max-contribution").value =
    maxContribPerPayPeriod.toFixed(2);
  document.getElementById("amount-remaining").value =
    amountRemaining.toFixed(2);
}
function resetForm() {
  document.getElementById("contribution-limit").value = "";
  document.getElementById("catch-up-checkbox").checked = false;
  document.getElementById("catch-up").disabled = true;
  document.getElementById("catch-up").value = "";
  document.getElementById("contribution-to-date").value = "";
  document.getElementById("remaining-pay-periods").value = "";
  document.getElementById("max-contribution").value = "";
  document.getElementById("amount-remaining").value = "";
}
