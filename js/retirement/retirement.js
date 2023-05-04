document.getElementById("future-value-button").addEventListener("click", () => {
    let monthlySaving = document.getElementById("a").value;
    let retirementAge = document.getElementById("d").value;
    let annualReturnRate = document.getElementById("b").value;
    let startingAge=document.getElementById("c").value;
    let final = document.getElementById("e");
    let r = annualReturnRate/100;
    let years = retirementAge-startingAge;
    let fv = 0;
	if(r != 0) {
			fv = (monthlySaving*12*(Math.pow(1+r, years) - 1))/r;
	} else {
			v = monthlySaving*12*years; 
	}
	final.value=Math.round(fv);
  });

