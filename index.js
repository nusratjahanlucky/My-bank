// const depositBtn = document.getElementById('deposit-btn')
// const buyBtc = document.getElementById('buy-btc')
// const buyEth = document.getElementById('buy-eth')
// const balanceFeild = document.getElementById('balance-field')
// const btcField = document.getElementById('btc-field')
// const ethField = document.getElementById('eth-field')

function getInputvalue(boxId){
    let inputBox = document.getElementById(boxId)
    let inputAmount = parseFloat(inputBox.value)
    if (isNaN(inputAmount) || inputAmount <0) {
        depositBox.value='';
        return alert('please input valid amount of money in number format')
    } 
    inputBox.value = '';
    return inputAmount
}
depositBtn.addEventListener('click',function(event){
    event.preventDefault()
    let availableBalance = parseFloat(balanceFeild.innerText)
    let inputAmount = getInputvalue('deposit-box')
    if(inputAmount > 0){
        balanceFeild.innerText = inputAmount + availableBalance
    }
})

buyBtc.addEventListener('click',function(){
    updatePortfolio('btc-box')
})

buyEth.addEventListener('click',function(){
    updatePortfolio('eth-box')
})

function updatePortfolio(boxId){
    let availableAmount = parseFloat(balanceFeild.innerText)
    let coinAmount = getInputvalue(boxId)

    if(coinAmount > 0){
        let totalExpense
        if(boxId == 'btc-box'){
            totalExpense = 10 * coinAmount
            if(totalExpense > availableAmount){
                return alert('not enough balance')
            }
            btcField.innerText = coinAmount
        }else if(boxId == 'eth-box'){
            totalExpense = 5 * coinAmount
            if(totalExpense > availableAmount){
                return alert('not enough balance')
            }
            ethField.innerText = coinAmount
        } 
        balanceFeild.innerText = availableAmount - totalExpense;
               
    }
}

// depositBtn.addEventListener('click',function(event){
//     event.preventDefault()
//     let depositBox = document.getElementById('deposit-box')
//     let availableBalance = parseFloat(balanceFeild.innerText)
//     let inputAmount = parseFloat(depositBox.value)
//     if (isNaN(inputAmount) || inputAmount <0) {
//         depositBox.value='';
//         return alert('please input valid amount of money in number format')
//     }
     
//     balanceFeild.innerText =  parseFloat(depositBox.value) + availableBalance
//     depositBox.value='';
// })