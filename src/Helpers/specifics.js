
function getName(tv){
    return tv.brand + tv.type + tv.name
}

export function numberToCurrency(number){
    return "€ " + number + ",-"
}

export function sizesAvailable(tv){
    let sizes = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        const sizeInInch = tv.availableSizes[i];
        const sizeInCm = Math.round(tv.availableSizes[i] * 2.54);

        sizes = sizes + `${sizeInInch} inch (${sizeInCm} cm)`;
    if (i < tv.availableSizes.length - 1){
        sizes = `${sizes} | `;
    }
    }
    return sizes
}

export default getName;