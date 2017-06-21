/**
 * Created by zswki on 2017/5/22.
 */

function titleCase(str) {
    var strArray = str.split(" ");
    var newArray = [];
    for(var i = 0; i < strArray.length; i++){
        var firstLetter = strArray[i][0].toUpperCase();
        var restLetter = strArray[i].substring(1, strArray[i].length).toLowerCase();
        var newStr = firstLetter+restLetter;
        newArray.push(newStr);
    }

    return newArray.join(" ");
}

titleCase("I'm a little tea pot");
