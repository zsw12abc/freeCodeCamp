/**
 * Created by zswki on 2017/5/25.
 */

function destroyer(arr) {
    // Remove all the values
    var arr = arguments[0];
    var params = [];

    // Create array of all elements to be removed
    for (var k = 1; k < arguments.length; k++)
        params.push(arguments[k]);

    // return all not matching values
    return arr.filter(function(item) {
        return params.indexOf(item) < 0;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
