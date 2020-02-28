var letters = [];
var word = "malayalam"
var rword = "";

//put the word into the stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}
if (rword == word) {
    console.log("the word is paliandrome");
} else {
    console.log("not paliandrome");
}