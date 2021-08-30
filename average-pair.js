// add whatever parameters you deem necessary
function averagePair(array, number) {
    let [left, right] = [0, array.length];

    while (left < right) {
        const average = ((array[left] + array[right - 1]) / 2) 
        if (average === number) {
            return true;
        } else if (average < number) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}