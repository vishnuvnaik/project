/**
* @description : Anagram Detection
* @param {Anagram}
* @return Wheather the string are anagram or not
*/

anagramPro = (str1, str2) => { //function for anagram detection
    try { //try catch function for handling exceptions
        if (str1.length != str2.length) { //check the length of two inputted strings 
            return false;
        }
        let sortStr1 = str1.split('').sort().join(''); //split and sort 
        let sortStr2 = str2.split('').sort().join('');
        if (sortStr1 == sortStr2) { //check wheather the sorted strings are same or not
            console.log('The inputted string posses anagram property'); //printing the results
        }
        else {
            console.log('the strings are not anagram');
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { anagramPro }