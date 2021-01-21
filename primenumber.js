function isPrime(n){
    

for( var i = 2; i <n; i++){
    if(n%2 == 0){
      return("is not prime");
    }
else{
     return("is  prime");
}
}

}
var result = isPrime(10);
console .log(result);




