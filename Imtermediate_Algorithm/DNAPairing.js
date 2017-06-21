/**
 * Created by zswki on 2017/5/26.
 */

function pairElement(str) {

    var result = [];
    for(var i = 0; i < str.length; i++){
        var pair = [];
        pair.push(str[i]);
        switch(str[i]){
            case "A":
                pair.push("T");
                break;
            case "T":
                pair.push("A");
                break;
            case "G":
                pair.push("C");
                break;
            case "C":
                pair.push("G");
                break;
        }
        result.push(pair);

    }
    return result;
}

pairElement("GCG");
