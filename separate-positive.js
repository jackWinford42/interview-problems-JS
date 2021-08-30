// add whatever parameters you deem necessary
function separatePositive(array) {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[index] < 0) {
            const number = array.splice(index, 1)[0]
            array.push(number)
        } else index++;
    }
    return array;
}
