/**
 * Created by zswki on 2017/5/26.
 */

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    var sourceKeys = Object.keys(source);
    // Only change code below this line
    for (var i = 0; i < collection.length; i++) {
        var collKeys = Object.keys(collection[i]);
        var boolPoint = true;
        for(var j = 0; j < sourceKeys.length; j++){
            if(collKeys.indexOf(sourceKeys[j]) < 0){
                boolPoint = false;
            }
        }
        if(boolPoint){
            var boolP = true;
            for(var k = 0; k < sourceKeys.length; k++){
                if(collection[i][sourceKeys[k]] != source[sourceKeys[k]]){
                    boolP = false;
                }
            }
            if(boolP){
                arr.push(collection[i]);
            }
        }


    }

    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
