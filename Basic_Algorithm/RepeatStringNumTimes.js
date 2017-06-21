/**
 * Created by zswki on 2017/5/22.
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    var result = "";
    for (var i = 0; i<num; i++){
        result += str;
    }
    return result;
}

repeatStringNumTimes("abc", 3);
