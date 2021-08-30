// add whatever parameters you deem necessary
function twoArrayObject(firstArr, secondArr) {
    let combined = {};

    while (firstArr.length) {
        combined[firstArr.shift()] = secondArr.length ? secondArr.shift() : null;
    }
    return combined;
}
