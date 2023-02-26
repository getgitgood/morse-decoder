const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const numsArr = [];
    const wordsQuantity = expr.length / 10;
    const morseArr = [];

    let result = ''

    for (let i = 0; i < wordsQuantity; i++) {
        numsArr.push(expr.slice(i * 10, ((i + 1) * 10)))
    }

    const normalizedNums = numsArr.map(item => {
        while (item.startsWith('0')) {
            item = item.slice(1)
        }
        if (!item.startsWith('*')) {
            item = item.match(/.{1,2}/g)
        }
        return item
    })

    for (let i = 0; i < normalizedNums.length; i++) {
        let str = '';
        for (let j = 0; j < normalizedNums[i].length; j++) {
            if (!normalizedNums[i][j].startsWith('*')) {
                normalizedNums[i][j] == '11' ? str += '-' : str += '.'
            } else {
                str = '**********'
            }
        }
        morseArr.push(str)
    }

    morseArr.forEach(item => {
        MORSE_TABLE[item] ? result += MORSE_TABLE[item] : result += ' '
    })

    return result;
}

module.exports = {
    decode
}