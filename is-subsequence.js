// add whatever parameters you deem necessary
function isSubsequence(first, second) {
    first = first.split('');
    second = second.split('');
    for (let i = 0; i < second.length && first.length; i++) {
        if (first[0] === second[i]) first.shift();
    }
    if (!first.length) return true;
    return false;
}