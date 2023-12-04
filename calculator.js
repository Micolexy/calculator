// const clearbtn = document.querySelector("#clear");
// const result = document.querySelector("#resultbox");
// const allbtns = document.querySelectorAll(".btn");
// const btns = document.querySelectorAll(".num-btn");
// const totalbtn = document.querySelector("#total");

// const allbtnsSpread  = [...allbtns];
// const btnsSpread  = [...btns];

// // number input
// btnsSpread.forEach((button, i) => {
//    button.addEventListener("click",() => {
//     // inner vauless for calculator
//     if ( result.innerHTML == "0") {
//         result.innerHTML = "";
//     };
//     const value = btns[i].innerHTML;
//     result.innerHTML += value;
//    });
// });
// // functions
// function evaluate(fn){
//     return new Function('return' + fn)();
// }
// // calculate
// totalbtn.addEventListener('click', ()=> {
//     const allinputs = result.innerHTML;
//     result.innerHTML = evaluate(allInputs);
//     console.log(evaluate(allInputs));
// });
// // to clear
// clearbtn.addEventListener("click",() => {
//     result.innerHTML = "0"
// })

let btns = document.querySelectorAll(".num-btn");
let allBtns = document.querySelectorAll(".btn");
let resultBox = document.querySelector("#resultbox");
let clearBtn = document.querySelector("#clear");

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});
function evaluate(fn) {
  return new Function("return " + fn)();
}
total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  resultBox.innerHTML = evaluate(allInputs);
  console.log(evaluate(allInputs));
});
clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});
