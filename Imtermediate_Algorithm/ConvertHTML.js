function convertHTML(str) {
    //& < > " '
    var strArray = str.split("");
    var len = strArray.length;
    var result = "";
    for(var i = 0; i < len; i++){
        var code = strArray[i].charCodeAt(0);
        var codeChar = "";
        if(code == 34){//"
            codeChar = "&quot;";
        }else if(code == 38){//&
            codeChar = "&amp;";
        }else if(code == 39){//'
            codeChar = "&apos;";
        }else if(code == 60){//<
            codeChar = "&lt;";
        }else if(code == 62){//>
            codeChar = "&gt;";
        }
        if(codeChar == "") {
            result = result.concat(strArray[i]);
        }else{
            result = result.concat(codeChar);
        }
    }
    return result;
}

convertHTML("Dolce & Gabbana");
