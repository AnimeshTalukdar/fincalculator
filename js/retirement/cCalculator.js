$(function() {
    $("#future-value-button").click(function() {
      // Retrieve input values
      var currentSaved = $("#Currently Saved").val();
      var salary = $("#Salary").val();
      var salaryMode = $("#salaryMode").val();
      var annualSalaryRaise = $("#Annual Salary Raise").val();
      var compounding = $("#Compounding").val();
      var contribution = $("#Contribution").val();
      var employerMatch = $("#Employer Match").val();
      var secondaryEmployerMatch = $("#Secondary Employer Match").val();
      var secondaryEmployerMatchUpTo = $("#Secondary Employer Match Up To").val();
      var annualReturnRate = $("#Annual Return Rate").val();
      var howManyYearsUntilRetire = $("#How Many Years until Retire").val();
  
      // Calculate future value
      var futureValue = calculateRetirement(
        currentSaved,
        salary,
        salaryMode,
        annualSalaryRaise,
        compounding,
        contribution,
        employerMatch,
        secondaryEmployerMatch,
        secondaryEmployerMatchUpTo,
        annualReturnRate,
        howManyYearsUntilRetire
      );
  
      // Display future value
      $("#future-value").text(futureValue.toLocaleString("en-US", { style: "currency", currency: "USD" }));
    });
  });
  
  function calculateRetirement(currentSaved, salary, salaryMode, annualSalaryRaise, compounding, contribution, employerMatch, secondaryEmployerMatch, secondaryEmployerMatchUpTo, annualReturnRate, howManyYearsUntilRetire) {
    // Convert salary to annual amount if necessary
    if (salaryMode === "Monthly") {
      salary *= 12;
    }
  
    // Calculate contributions
    var totalContribution = 0;
    for (var i = 0; i < howManyYearsUntilRetire; i++) {
      var currentYearContribution = (salary * (contribution / 100)) + (salary * (employerMatch / 100)) + (salary * (Math.min(secondaryEmployerMatch, (secondaryEmployerMatchUpTo / 100) * salary)) / 100);
      totalContribution += currentYearContribution;
      salary *= (1 + (annualSalaryRaise / 100));
    }
  
    // Calculate future value
    var futureValue = currentSaved * Math.pow(1 + (annualReturnRate / 100 / compounding), compounding * howManyYearsUntilRetire) + totalContribution * ((Math.pow(1 + (annualReturnRate / 100 / compounding), compounding * howManyYearsUntilRetire) - 1) / (annualReturnRate / 100 / compounding));
  
    return futureValue;
  }