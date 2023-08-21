for (let i = 1; i <= 100; i++) {
    //se divisivel por 3 e 5 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        //se divisivel por 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        //se divisivel por 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
        //caso der erro o programa retorna o numero "inserido"
    }
}
