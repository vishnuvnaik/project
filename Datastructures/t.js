for (let i = 0; i < ar.length; i++) {
    let a = 0;
    for (let j = 0; j < ar.length; j++) {
        if (i !== j) {
            let result = toFindAnagram(ar[i].toString(), ar[j].toString()); //calling function and converting number to string
            if (result) {
                arra[0].push(ar[i]); //pushing only anagram values
                a++; //for print non anagram values
                break; //to avoid duplicate values
            }
        }
    }
    if (a === 0) {
        arra[1].push(ar[i]); //pushing non anagram values
    }
}
console.log('Anagram');
console.log(arra);

function toFindAnagram(string1, string2) {

    string1 = string1.split(''); //spliting to char
    string2 = string2.split('');
    if (string1.length === string2.length) { //check lenght of both strings
        let count = 0;
        for (let i = 0; i < string1.length; i++) {
            for (let j = 0; j < string2.length; j++) {
                if (string1[i] === string2[j]) { //checking char by char
                    string2[j] = undefined; //to avoid dupication
                    string1[i] = null; //to avoid dupication
                    count++; //for finding anagram
                }
            }
        }
        if (count === string1.length) { //checking anagram
            return true;
        } else {
            return false;
        }
    } else {
        return false;

    }
}