/**
 * Created by zswki on 2017/5/30.
 */

function fearNotLetter(str) {
    var point = 0;
    var zNum = 'z'.charCodeAt(0);
    for (var i = 0; i < str.length; i++){
        if(i == 0){
            point = str.charCodeAt(i);
        }else{
            var word = str.charCodeAt(i);
            if(word == zNum){
                return undefined;
            }else if(word == point + 1 && i == str.length - 1) {
                return undefined;
            }else if(word == point + 1 && i != str.length - 1){
                point = word;
            }else{
                return String.fromCharCode(point + 1);
            }
        }
    }
    return str;
}

fearNotLetter("abce");
