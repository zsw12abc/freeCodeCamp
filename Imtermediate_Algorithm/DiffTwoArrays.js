/**
 * Created by zswki on 2017/5/26.
 */

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) < 0){
            newArr.push(arr1[i]);
        }
    }
    for(var j = 0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j]) < 0){
            newArr.push(arr2[j]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
