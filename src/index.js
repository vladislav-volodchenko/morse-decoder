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
    let arr = expr.match(/.{1,10}/g),
        codeStr = '',
        decodeStr = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j+= 2) {
            if (arr[i][j] === '1' && arr[i][j + 1] === '0') {codeStr += '.';}
            if (arr[i][j] === '1' && arr[i][j + 1] === '1') {codeStr += '-';}
            if (arr[i][j] === '*') {codeStr = ' ';}
        }
        codeStr === ' ' ? decodeStr += ' ' : decodeStr += MORSE_TABLE[codeStr];
        codeStr = '';
    }
    return decodeStr;
}

module.exports = {
    decode
}
