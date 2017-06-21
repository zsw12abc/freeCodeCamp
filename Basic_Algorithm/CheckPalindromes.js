/**
 * Created by zswki on 2017/5/22.
 */

function palindrome(str) {
    // Good luck!
    str.replace(/[^0-9a-zA-Z]/g, '');// find any char not(^) between([]) 0-9a-zA-Z
    var strArray = str.toLowerCase().split("");
    var newS = strArray.join();
    strArray.reverse();
    var newR = strArray.join();
    if(newR == newS){
        return true;
    }else{
        return false;
    }
}



palindrome("eye");
