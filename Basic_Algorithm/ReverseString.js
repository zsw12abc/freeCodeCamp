/**
 * Created by zswki on 2017/5/22.
 */

function reverseString(str) {
    var strArray = str.split("");
    strArray.reverse();
    var newStr = strArray.join("");
    return newStr;
}

reverseString("hello");
