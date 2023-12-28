
let alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];//0~25

function caesarCipher(str) { //af => DI

    let res = "";
    for (let i = 0; i < str.length; i++) {
        
        let char = str[i].toLowerCase();
        let index = alphabet.indexOf(char);
        
        if (index !== -1) {
            let shiftedIndex = (index + 3) % 26; //ensure that the index stays within the bounds of the alphabet array, which has 26 letters.
            let shiftedChar = alphabet[shiftedIndex].toUpperCase();
            res += shiftedChar;
        }else {
           res += str[i]
           
        }
    }
    return res
}


module.exports = caesarCipher;