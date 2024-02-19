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
