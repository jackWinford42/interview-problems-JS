// add whatever parameters you deem necessary
function sameFrequency(first, second) {
    if (first.length !== second.length) return false;
    [first, second] = [first.toString(), second.toString()]
    let [firstFreq, secondFreq] = [{}, {}]

    let firstDigs = first.split('')
    for (const digit of firstDigs) {
        firstFreq[digit] = firstFreq[digit] ? firstFreq[digit] + 1 : 1;
    }

    let secondDigs = second.split('');
    for (const digit of secondDigs) {
        secondFreq[digit] = secondFreq[digit] ? secondFreq[digit] + 1 : 1;
    }

    for (const index in Object.keys(firstFreq)) {
        const digit = Object.keys(firstFreq)[index]

        if (firstFreq[digit] !== secondFreq[digit]) return false
    }

    return true
}