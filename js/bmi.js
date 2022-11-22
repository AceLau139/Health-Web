var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
var form = document.querySelector("#form");

//check the form is well filled or not
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

//count BMI

