/**
 * Created by zswki on 2017/5/22.
 */

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var strArray = str.split(" ");
    if (strArray.length == 1) {
        var lastChar = str.substring(str.length - 1, str.length);
        return lastChar == target;
    }else{
        var lastStr = strArray[strArray.length-1];
        if (lastStr.length == target.length) {
            return lastStr == target;
        }else{
            var lastChar = lastStr.substring(lastStr.length-target.length,lastStr.length);
            return lastChar == target;
        }
    }
}

confirmEnding("Bastian", "n");
