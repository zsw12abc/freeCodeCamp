/**
 * Created by zswki on 2017/5/22.
 */
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var len = arr.length;
    var result = [];
    var num = Math.floor(len/size);//needs floor to get an integer rather than a float.
    var ram = len%size;

    for(var i = 0; i < num; i++){
        var smallArr = [];
        for(var j =0; j < size; j++){
            smallArr.push(arr[i*size+j]);
        }
        result.push(smallArr);
    }
    if(ram !== 0){
        var leftArr = [];
        for(var k = len - ram; k < len; k++){
            leftArr.push(arr[k]);
        }
        result.push(leftArr);
    }

    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
