function spinalCase(str) {
    var regEX1 = /[!@#$%^&*_\s]/gi;
    var regEX2 = /[A-Z]/g;
    str = str.replace(regEX1, "-");
    var arr = str.split('');

    var newArr = [];
    newArr.push(arr[0]);

    for (var i = 1; i < arr.length; i++){

        if (arr[i] === "-") {
            newArr.push(arr[i]);
        } else if (arr[i] === arr[i].toUpperCase()) {

            if (arr[i - 1] === "-") {
                newArr.push(arr[i]);
            } else {
                newArr.push("-");
                newArr.push(arr[i]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    newArr = newArr.join('').toLowerCase();
    return newArr;
}

spinalCase("AllThe-small Things");