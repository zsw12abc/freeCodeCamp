/**
 * Created by zswki on 2017/5/26.
 */

function convertToRoman(num) {
    var result = "";
    var numResult = num;
    while(numResult > 0) {
        if (numResult == 9) {
            numResult -= 9;
            result += "IX";
        } else if (numResult == 4) {
            numResult -= 4;
            result += "IV";
        } else if (numResult >= 1000) {
            numResult -= 1000;
            result += "M";
        } else if (numResult >= 900) {
            numResult -= 900;
            result += "CM";
        } else if (numResult >= 500) {
            numResult -= 500;
            result += "D";
        } else if (numResult >= 400) {
            numResult -= 400;
            result += "CD";
        } else if (numResult >= 100) {
            numResult -= 100;
            result += "C";
        }else if(numResult >= 90){
            numResult -= 90;
            result += "XC";
        }else if(numResult >= 50){
            numResult -= 50;
            result += "L";
        }else if(numResult >= 40){
            numResult -= 40;
            result += "XL";
        }else if(numResult >= 10){
            numResult -= 10;
            result += "X";
        }else if(numResult >= 5){
            numResult -= 5;
            result += "V";
        }else if(numResult >= 1){
            numResult -= 1;
            result += "I";
        }

    }

    return result;
}

convertToRoman(36);
