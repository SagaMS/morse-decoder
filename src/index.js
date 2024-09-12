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

    function decodeSingleWord(word){
        let w = word.match(/.{1,2}/g);
        let result =''
        for (let i= 0; i < w.length; i++) {
            if(w[i] ==='11'){
                result +='-'
            }else if(w[i]==='10'){
                result +='.'
            }else{
                result+=''
            }
            
        }
        return MORSE_TABLE[result]
    }
       
    // write your solution here

let words = expr.match(/.{1,10}/g);
let wordMorse = []

for (let index = 0; index < words.length; index++) {
    if(words[index] === '**********'){
        wordMorse.push(' ')
    }else{
        wordMorse.push(decodeSingleWord(words[index]))
    }
    
}

return wordMorse.join('')

}


module.exports = {
    decode
}