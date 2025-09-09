const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mainMenu(){

console.log("=================================");
console.log("Factorial Application");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("=================================");

 rl.question("Enter your choice (1-3): ", choice =>{   

    if (choice === '1') {
        say Hello();
    } else if (choice === '2') {
        computeFactorial();
    }else if (choice === '3') {
        exit Program();
    }else {
        console.log("Invalid Choice.Please try again");
    }

})
}

    function sayHello(){
        console.log("Hello")
    }

    function computeFactorial(){
        console.log("Factorial");

        rl.question("Please enter a number for factorial: ", numStr =>{
            let num = parseInt(numStr);

         if (isNaN(num) || num < 0){
            console.log("Please enter non integer");
         }else{
            let fact = 1;
          
         for(i = 1; i <= num; ++){
            fact *=i;
         }

         console.log("The factorial of " + num + " is " +fact);
     }
        backToMenu();
        })
    }      
  
    function exitProgram(){
        console.log("Exiting Application");
        rl.close();
        console.clear();
        
    }
    