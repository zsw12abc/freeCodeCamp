/**
 * Created by zswki on 2017/5/26.
 */

function sumAll(arr) {
    var a = arr[0];
    var b = arr[1];
    if(a > b){
        var c = a;
        a = b;
        b = c;
    }
    var sum = 0;
    for(var i = a; i<= b; i++){
        sum+=i;
    }
    return sum;
}

sumAll([1, 4]);
