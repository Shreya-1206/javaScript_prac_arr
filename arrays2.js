let numbers = [];
let choice;
// choice categories
do {
    console.log('Choose an option: /n1. Add  a number /n2. Remove a number /n3. Print the number /n4. Exit');
    choice = parseInt(prompt('Enter your choice')); 
    
    switch (choice) {
        case 1:let numberToAdd = prompt("Enter a number");
        numbers.push(numberToAdd);console.log("Added!")
        break;
        case 2:let removeNum = prompt('Enter a number to remove:');
        let indexToRemove = numbers.indexOf(removeNum);
        if (indexToRemove == -1) {
           numbers.splice(indexToRemove,1);
           console.log('removed!')
        } else{
            console.log("Number not found..")
        }
        break;
        case 3: for(const number of numbers ) {
            console.log(number);
        }
            
        break;
        case 4: console.log('Thanks for stopping by..');
         break;
        default:console.log("Invaild input ");
    }
} while(choice >=1 && choice <=4);
