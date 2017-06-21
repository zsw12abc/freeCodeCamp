/**
 * Created by zswki on 2017/5/26.
 */

function myReplace(str, before, after) {
    var arr = str.split(" ");
    var result = "";
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == before){
            var afterNew = after;
            if(before[0] == before[0].toUpperCase()) {
                afterNew = after[0].toUpperCase() + after.slice(1);
            }
            arr.splice(i, 1, afterNew);
        }
    }
    // for(var j = 0; j < arr.length; j++){
    //     result += arr[j];
    // }
    result = arr.join(" ");
    return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
