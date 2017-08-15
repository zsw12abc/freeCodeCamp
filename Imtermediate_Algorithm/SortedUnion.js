function uniteUnique() {
    var result = [];
    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i].length; j++){
            if(!result.includes(arguments[i][j])){
                result.push(arguments[i][j]);
            }
        }
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
