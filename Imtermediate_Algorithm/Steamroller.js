
function steamrollArray(arr) {
    // I'm a steamroller, baby
    var oneArray = [];
    flatten(arr);
    function flatten(arr) {
        arr.forEach(function (arr2) {
            if(!Array.isArray(arr2)){
                oneArray.push(arr2);
            }else{
                flatten(arr2);
            }
        });
    }
    return oneArray;
}



steamrollArray([1, [2], [3, [[4]]]]);
