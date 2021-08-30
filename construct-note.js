// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let [messFreq, lettFreq] = [{}, {}]

    let messLetts = message.split('')
    for (const letter of messLetts) {
        messFreq[letter] = messFreq[letter] ? messFreq[letter] + 1 : 1;
    }

    let lettsArr = letters.split('');
    for (const letter of lettsArr) {
        lettFreq[letter] = lettFreq[letter] ? lettFreq[letter] + 1 : 1;
    }

    for (const index in Object.keys(messFreq)) {
        const letter = Object.keys(messFreq)[index]

        if (messFreq[letter] > lettFreq[letter] || lettFreq[letter] === undefined) return false
    }

    return true
}