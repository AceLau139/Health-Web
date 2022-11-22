//var age = document.querySelector("#age");
var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
//var male = document.querySelector("#m");
//var female = document.querySelector("#f");
var form = document.querySelector("#form");

function validateForm() {
    if (
        height.value == "" ||
        weight.value == ""
    ) {
        alert("請輸入所有資料！");
        document
            .querySelector("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}

document.querySelector("#submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    
    var bmi = Number(p[1]) / (Number(p[0])**2);
    var result = "";
    if (bmi < 18.5) {
        result = "體重過輕";
    } 
    else if (18.5 <= bmi && bmi < 24) {
        result = "健康";
    } 
    else if (24 <= bmi && bmi < 27) {
        result = "過重";
    } 
    else if (27 <= bmi && bmi < 30) {
        result = "輕度肥胖";
    } 
    else if (30 <= bmi && bmi < 35) {
        result = "中度肥胖";
    }
    else if (35 <= bmi) {
        result = "重度肥胖";
    }

    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.querySelector("#submit").removeEventListener("click", countBmi);
    document
        .querySelector("#submit")
        .removeEventListener("click", validateForm);
}

document.querySelector("submit").addEventListener("click", countBmi);