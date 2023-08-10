//Grouping Array
function GroupArrayElements (inputArr, n) {
    const result =[];
    //Check n is a valid num or not
    if (n <=0 || !Number.isInteger(n)) {
      return result;
    }
  //calculate len of subarray:
    const len = Math.floor(inputArr.length/n);
  //intialize the array and splitting it up:
    let start = 0;
    let end = len;
    
    for (let i = 0; i < n; i++){
      if (i == n-1) {
        result.push(inputArr.slice(start));
      } else {
        result.push(inputArr.slice(start,end));
      }
      start = end;
      end += len;
    }
  return result
  }
   
  let arr = [1,2,3,4,5,6,67,98,100];
  let num = 3;
  const response = GroupArrayElements(arr,num);
  console.log(response);

  //Iteration method using forEach()

  const books =[
    'Lord of the drinks',
    'Game of thrones',
    'Happy potter and the screats of chambers',
    'Do epic shit'
  ];

  const flipTitles = function(elem, index) {
    console.log(elem.split('').reverse().join(''));
  };
  books.forEach(flipTitles);

  //Array of from

  const ispalindrome = (word) => Array.from(word).reverse().join('')==word;
  console.log(ispalindrome('lol'));
  console.log(ispalindrome('Hello'));


//A user can choose a type , insert a array ,remove it , should able to print it , and lastly exit it.
//set number as empty
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
        case 2:let removeNum = promt('Enter a number to remove:');
        let indexToRemove = numbers.indexOf(removeNum);
        if (indexNum == -1) {
           numberToAdd.splice(indexToRemove,1);
           console.log('removed!')
        } else{
            console.log("Number not found..")
        }
        break;
        case 3: for(const numbers of numbers ) {
            console.log(numbers);
        }
            
        break;
        case 4: console.log('Thanks for stopping by..');
         break;
        default:console.log("Invaild input ");
    }
} while(choice >=1 && choice <=4);
