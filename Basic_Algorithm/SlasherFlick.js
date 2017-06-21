/**
 * Created by zswki on 2017/5/22.
 */

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var len = arr.length;
    var result = [];
    if(howMany > len){
        return result;
    }else {
        for (var i = howMany; i < len; i++) {
            result.push(arr[i]);
        }
        return result;
    }
}

slasher([1, 2, 3], 2);
