/**
 * Created by zswki on 2017/5/25.
 */

function rot13(str) { // LBH QVQ VG!
    var strArr = str.split("");
    var result = "";
    for(var i = 0; i < strArr.length; i++){
        var num = strArr[i].charCodeAt(0);
        if(num < 65 || num > 122){
            result += String.fromCharCode(num);
        }else{
            if(num >= 65 && num < 78){
                num += 13;
            }else if(num >= 78 && num <=90){
                num -= 13;
            }else if(num >= 97 && num < 110){
                num += 13;
            }else if(num >= 110 && num <=122){
                num -= 13;
            }
            result += String.fromCharCode(num);
        }
    }
    return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
