function getSeatName(seatId) {
    const seatKbd = document.getElementById(seatId);
    const seatName = seatKbd.innerText;

    return seatName;
}

function removeClassFromId(seatNameId) {
    const removeId = document.getElementById(seatNameId);
    removeId.classList.remove('bg-[#1DD100]');
}

// function getTotalAmount() {
//     const totalAmount = document.getElementById('total-bdt');
//     const amount = totalAmount.innerText = '550';

// }

function addSeatLists(seatNameId) {
    const seatListContainer = document.getElementById('seat-lists');
    const seatList = seatListContainer.children.length;

    if (seatList <= 3) {
        const newList = document.createElement('li');
        newList.innerText = getSeatName(seatNameId);
        seatListContainer.appendChild(newList);
        // ei porjonto child hishabe nia nibo
        const newListChildClass = document.createElement('div');
        newListChildClass.innerText = 'Economy';
        newList.appendChild(newListChildClass);

        const newListChildPrice = document.createElement('div');
        newListChildPrice.innerText = '550';
        newList.appendChild(newListChildPrice);

        newList.style.display = 'flex';
        newList.style.justifyContent = 'space-between';

        const seatNumber = document.getElementById('seat-count');
        seatNumber.innerText = seatList + 1;

        const seatLeftCount = document.getElementById('seat-left-count');
        const seatLeftNumber = seatLeftCount.innerText;
        const seatLeft = parseInt(seatLeftNumber);
        const newCount = seatLeft - 1;
        seatLeftCount.innerText = newCount;

        const totalAmount = document.getElementById('total-bdt');
        const currentAmount = totalAmount.innerText;
        const amountNumber = parseInt(currentAmount);
        const firstClick = amountNumber + 550;
        totalAmount.innerText = firstClick;

    } else {
        alert('You can not select more than 4 seat');
        removeClassFromId(seatNameId);
    }
}



document.getElementById('disabled-btn').addEventListener('click', function(){
    const totalBdt = document.getElementById('total-bdt');
    const bdt = totalBdt.innerText; 
    const bdtValue = parseInt(bdt);
    const discount15 = bdtValue*0.15;
    const discount20 = bdtValue*0.20;
    const grandTotal15 = bdtValue - discount15;
    const grandTotal20 = bdtValue - discount20;

    const couponField = document.getElementById('coupon-field').value;
    console.log(couponField);

    if(couponField === 'NEW15'){
        document.getElementById('grand-total').innerText = grandTotal15;
    } else if(couponField === 'Couple 20'){
        document.getElementById('grand-total').innerText = grandTotal20;
    }
    
})


function getTotalBdt (bdtId){
    const totalBdt = document.getElementById(bdtId);
    const bdtValue = totalBdt.innerText;
    const value = parseInt(bdtValue);
    return value;
}



const disabledButton = document.getElementById('disabled-btn');

document.getElementById('coupon-field').addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (text === 'NEW15') {
        disabledButton.removeAttribute('disabled');
    } else if(text === 'Couple 20'){
        disabledButton.removeAttribute('disabled');
    }
     else {
        disabledButton.setAttribute('disabled', true);
    }
})

// disabledButton.addEventListener('click', function () {

// })


// function couponButton(value) {
//     const totalAmount = document.getElementById('total-bdt');
//     const currentAmount = totalAmount.innerText;
//     const amountNumber = parseInt(currentAmount);
//     console.log(amountNumber);
// }






// const passengerName =  document.getElementById('passenger-name');
// const phoneNumber = document.getElementById('phone-number');
// const emailId = document.getElementById('email-id');
const nextButton = document.getElementById('next-button').addEventListener('click', function(){
    const fullBody = document.getElementById('main-id');
    fullBody.classList.add('hidden');
    const congratsSection = document.getElementById('congrats');
    congratsSection.classList.remove('hidden');
})


// const pName = passengerName.addEventListener('keyup', function (event) {
//     const text1 = event.target.value;
//     return text1;
// });
// const pNumber = phoneNumber.addEventListener('keyup', function (event) {
//     const text2 = event.target.value;
//     return text2;
// });
// const eId = emailId.addEventListener('keyup', function (event) {
//     const text3 = event.target.value;
//     return text3;
// });

// if(isNaN(!pName && !pNumber && !eId)){
//     nextButton.removeAttribute('disabled');
// }






