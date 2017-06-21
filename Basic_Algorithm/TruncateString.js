/**
 * Created by zswki on 2017/5/22.
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    var len = str.length;
    var result;
    if (len > num){
        if (num > 3) {
            result = str.substring(0, num - 3);
        }else{
            result = str.substring(0, num);
        }
        return result+"...";
    }else{
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
