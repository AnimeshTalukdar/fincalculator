document.getElementById("irr-npv-calculate").addEventListener("click", () => {
  let dr = +document.getElementById("discount-rate").value;
  let cf = +document.getElementsByClassName("cf");
  
  let npv = 0,
    x;
  for (let i = 0; i < cf.length; i++) {
    // console.log(cf[i].value);
    if (cf[i].value === "") x = 0;
    else x = cf[i].value / Math.pow(1 + dr / 100, i);
    x.toFixed(2);
    npv += x;
  }
  console.log(npv);
});

document.getElementById("irr-npv-reset").addEventListener("click", () => {
  document.getElementById("irr-npv-calculator").reset();
  document.getElementById("irr-npv-result").setAttribute("hidden", "true");
});
