import minus from '../assets/minus.png';
import check from '../assets/check.png';
import {inventory} from "../constants/inventory.js";

function specsIncluded(tv){
    const specs = []
    inventory[tv].options.map((option)=>{
        if (option.applicable) {
             specs.push({check} + option.name);
        }else{
            specs.push({minus} + option.name);
        }
        return specs
    });
}




// function specsIncluded(tv){
//     inventory[tv].options.map((option)=>{
//         return console.log(option.applicable + option.name);
//         });
// }

export default specsIncluded;