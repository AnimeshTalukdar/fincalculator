
function hide() {
    let ele = document.getElementById("result");
    ele.style.visibility = "hidden";
    document.getElementById("fibonacci-calculator").reset();
}


function calc() {

    let mUptrendRetracement = [
        "0% (b)",
        "23.6%",
        "38.2%",
        "50%",
        "61.8%",
        "76.4%",
        "100% (a)",
        "138.2%",
    ];

    let mUptrendExtension = [
        "261.8%",
        "200%",
        "161.8%",
        "138.2%",
        "100%",
        "61.8%",
        "50%",
        "38.2%",
        "23.6%",
    ];
    let mDowntrendRetracement = [
        "138.2%",
        "100% (b)",
        "76.4%",
        "61.8%",
        "50%",
        "38.2%",
        "23.6%",
        "0% (a)",
    ];
    let mDowntrendExtension = [
        "23.6%",
        "38.2%",
        "50%",
        "61.8%",
        "100%",
        "138.2%",
        "161.8%",
        "200%",
        "261.8%",
    ];


    let ele = document.getElementById("result");
    ele.style.visibility = "visible";

    let high = +document.getElementById("high").value;
    let low = +document.getElementById("low").value;

    let table1 = document.getElementById("resultTable1");
    table1.innerHTML = "";

    let table2 = document.getElementById("resultTable2");
    table2.innerHTML = "";

    let table3 = document.getElementById("resultTable3");
    table3.innerHTML = "";

    let table4 = document.getElementById("resultTable4");
    table4.innerHTML = "";


    for (let i = 0; i < mUptrendRetracement.length; i++) {
        let str = mUptrendRetracement[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(high) - (parseFloat(high) - parseFloat(low)) * d;

        let row = table1.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mUptrendRetracement[i];
        cell2.innerHTML = value.toFixed(4);

    }

    for (let i = 0; i < mUptrendExtension.length; i++) {
        let str = mUptrendExtension[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(high) + (parseFloat(high) - parseFloat(low)) * d;

        let row = table2.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mUptrendExtension[i];
        cell2.innerHTML = value.toFixed(4);

    }


    for (let i = 0; i < mDowntrendRetracement.length; i++) {
        let str = mDowntrendRetracement[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(low) + (parseFloat(high) - parseFloat(low)) * d;

        let row = table3.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mDowntrendRetracement[i];
        cell2.innerHTML = value.toFixed(4);

    }


    for (let i = 0; i < mDowntrendExtension.length; i++) {
        let str = mDowntrendExtension[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(low) - (parseFloat(high) - parseFloat(low)) * d;

        let row = table4.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mDowntrendExtension[i];
        cell2.innerHTML = value.toFixed(4);

    }


}
//
//function hide() {
//    let ele = document.getElementById("result");
//    ele.style.display = "none";
//    document.getElementById("fibonacci-calculator").reset();
//}