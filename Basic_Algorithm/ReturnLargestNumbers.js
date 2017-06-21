/**
 * Created by zswki on 2017/5/22.
 */

function largestOfFour(arr) {
    // You can do this!
    var result = [];
    for(var i = 0; i < arr.length; i++){
        var level = 0;
        for(var j = 0; j < arr[i].length; j++){
            if(level < arr[i][j]){
                level = arr[i][j];
            }
        }
        result.push(level);
    }
    return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
