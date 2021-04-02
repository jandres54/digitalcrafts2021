function newFunction(num) {
            
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function tipCalc(){
const billCost = document.querySelector("#costycost").value
const billCostConverted = parseInt(billCost)
const tipAmount = document.querySelector("#tipytip").value
const tipAmountConverted = parseInt(tipAmount)
const tipTotal = billCostConverted * (tipAmountConverted / 100)
const amountPaid = billCostConverted + tipTotal
const convertedAmountPaid = newFunction(amountPaid)
const displayValue = document.querySelector(".total")
displayValue.innerText = convertedAmountPaid

const grabList = document.querySelector(".prev-tips")
const listItem = document.createElement("li")
listItem.innerText = tipTotal
grabList.append(listItem)
}
const calcBtn = document.querySelector("#calculateBtn")

calcBtn.addEventListener('click', function(e){
tipCalc()
changeButtonColor()
})





