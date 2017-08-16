
function sumPrimes(num) {
    var sum = 0;
     for (var i = 2; i <= num; i++) {
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

function isPrime(val){
    //test if number is prime
    for(var i=2; i < val; i++){
        if(val % i === 0){
            return false;
        }
    }
    return true;
}

sumPrimes(10);
