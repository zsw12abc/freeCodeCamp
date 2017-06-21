/**
 * Created by zswki on 2017/5/22.
 */

function findLongestWord(str) {
    var strArray = str.split(" ");
    var level = 0;
    for(var i = 0; i < strArray.length; i++){
        if(strArray[i].length > level){
            level = strArray[i].length;
        }
    }
    return level;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
