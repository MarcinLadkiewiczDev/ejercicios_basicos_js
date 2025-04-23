const peliculas = ['dune', 'matrix', 'ironman', 'capitanamerica'];

const findLongestWord = (stringList) => {
    let longestWord = "";
    for (const string of stringList) {
        if(string.length > longestWord.length){
            longestWord = string;
        }
    }
    console.log(longestWord);
}

findLongestWord(peliculas);