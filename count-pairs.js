// add whatever parameters you deem necessary
function countPairs(array, number) {
    //convert array to set to remove duplicates and initialize pairs at zero
    let [numbers, pairs] = [new Set(array), 0];
    //loop over the numbers
    for (let val of numbers) {
        //deleting the val improves performance by cutting down on redundant reiteration of that value
        numbers.delete(val);
        //check if the other half of the pair exists
        if (numbers.has(number - val)) pairs++;
    }
    return pairs;
}