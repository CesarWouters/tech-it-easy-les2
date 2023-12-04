import {inventory} from "../constants/inventory.js"

function amountSold() {
    let soldNumber = 0;
    for (let i = 0; i < inventory.length; i++) {
        soldNumber = soldNumber + (inventory[i].sold);
    }
    return soldNumber;
}

export function amountBought() {
    let boughtNumber = 0;
    for (let i = 0; i < inventory.length; i++) {
        boughtNumber = boughtNumber + (inventory[i].originalStock);
    }
    return boughtNumber;
}

export function amountInStock() {
    let stockNumber = amountBought() - amountSold()

    return stockNumber;
}
export default amountSold;
