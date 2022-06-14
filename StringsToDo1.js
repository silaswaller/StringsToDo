function removeBlanks(str) {
    let newStr = ""
    for (let char in str) {
        if (str[char] != " ") {
            newStr += str[char]
        }
    }
    return newStr;
}

console.log(removeBlanks('i love you'));

function getDigits(str) {
    let newNumStr = " "
    for (let char in str) {
        if(!isNaN(str[char])) {
            newNumStr += str[char]
        }
    }
    return Number(newNumStr);
}

console.log(getDigits('s2t0r0'));

function acronym(str) {
    let wordsArr = str.split(" ")
    let acronymStr = " "
    for(let word in wordsArr) {
        if (wordsArr[word].length > 0) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    return acronymStr;
}

console.log(acronym("i love you"))

function countNonSpaces(str) {
    let counter = 0
    for (let char in str) {
        if(str[char] != " ") {
            counter++
        }
    }
    return counter;
}

console.log(countNonSpaces("i   l u v   u"))

function removeShorterStrings(arr, length) {
    let newStrings = []
    let nextIndex = 0
    for (let value in arr) {
        if (arr[value].length >= length) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings;
}

console.log(removeShorterStrings(["blah", "bla", "bl"], 4))