/**
 * Created by zswki on 2017/5/25.
 */


function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var arrSort = arr.sort(function(a, b){return a-b});
    var index = 0;
    for(var i = 0; i < arrSort.length; i++){
        if(num == arrSort[i]){
            index = i;
        }else if(num > arrSort[i]){
            index = i + 1;
        }
    }
    return index;
}

getIndexToIns([40, 60], 50);
