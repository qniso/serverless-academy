export function selectedNumber(number, array) {

    switch (number) {
        case 1:
            sortAlphabetically(array);
            break;
        case 2:
            sortToGreater(array);
            break;
        case 3:
            sortToSmaller(array);
            break;
        case 4:
            sortByNumOfLetters(array);
            break;
        case 5:
            showUniqueWords(array);
            break;
        case 6:
            showUniqueWords(array);
            break;
        default:
            console.log("Something went wrong");
            break;

    }
}

function sortAlphabetically(array) {
    const result = array.sort();

    console.log(result);
}

function sortToGreater(array) {
    const numberArray = array.filter(Number);
    const result = numberArray.sort((a, b) => a - b);

    console.log(result);
}

function sortToSmaller(array) {
    const numberArray = array.filter(Number);
    const result = numberArray.sort((a, b) => b - a);

    console.log(result);
}

function sortByNumOfLetters(array) {
    const result = array.sort((a, b) => a.length - b.length);

    console.log(result);
}

function showUniqueWords(array) {
    const result = new Set(array);

    console.log(result);
}


