/**
 * Created by zswki on 2017/5/25.
 */

function mutation(arr) {
    var str1 = arr[0].toLowerCase();
    var str2 = arr[1].toLowerCase();
    var point = 0;
    for(var i = 0; i < str2.length; i++){
        var result = false;
        for(var j = 0 ; j < str1.length; j++){
            if(str1[j] == str2[i]){
                result = true;
            }
        }
        if(result == false){
            return false;
        }
    }
    return true;

}

mutation(["hello", "hey"]);
