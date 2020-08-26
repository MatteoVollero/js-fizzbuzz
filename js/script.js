//Imposto il ciclo per stampare i primi cento numeri
for(i = 1 ; i < 101 ; i ++){
  //Se il numero è multiplo di 3 stampa fizz
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz ");
  }else if(i % 3 == 0){
    console.log("Fizz ");
  }else if(i % 5 == 0){
    console.log("Buzz ");
  }else{
    console.log(i + " ");
  }
}
