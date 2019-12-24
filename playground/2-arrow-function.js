// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

//const square = (x) => x * x;

//console.log(square(3));

const event = {
    name: 'Birthday party',
    guestList: ['Guest 1', "Guest 2", "Guest 3"],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();