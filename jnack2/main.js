const word1 = prompt('inserisci parola 1');

const word2 = prompt('inserisci parola 2');

if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else {
    console.log(word1);
    console.log(word2);
}