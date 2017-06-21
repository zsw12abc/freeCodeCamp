/**
 * Created by zswki on 2017/5/26.
 */

function translatePigLatin(str) {
    var left = "";
    var vowel = "aeiou";
    var point = 0;
    for(var i = 0; i < str.length; i++){
        if( vowel.indexOf(str[0]) >=0){
            left = "w";
            break;
        }
        if(vowel.indexOf(str[i]) < 0){
            left += str[i];
            point = i + 1;
        }else{
            break;
        }
    }
    var right = "";
    for(var j = point; j < str.length; j++){
        right += str[j];
    }
    var result = right + left + "ay";
    return result;
}

translatePigLatin("consonant");

