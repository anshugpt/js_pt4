// * For loop => it repete the piece of code.

//  for (initilize first using let; now give condition ; updation){
    // * Piece of code                                                                 // syntax of for loop
// } 

// print 1 2 3 ...5 using for loop

for(let i = 1 ; i <= 5; i++){
    // console.log(i);
}

// console.log(i); => 1, 2, 3, 4, 5 
// console.log("Anshu"); => Anshu, Anshu, Anshu, Anshu, Anshu
// let i = "Anshu" => nothing say on console window
  

// * Print odd number (1 to 15)


for (let i = 1 ; i<=15 ; i++){
    if (i%2 != 0){
    //  console.log(i);                   //* First method (my method)
    } else {
         // Do nothing :)
    } 
}


for(let i = 1 ; i<=15 ; i=i+2){
   // console.log(i);                      //* Sec method (mam method)
}

for(let i=15;i>=1;i=i-2){
//    console.log(i);                         //* Backward odd number
}


//* Print even numbers from (2 to 10)


for(let i=2;i<=20;i+=2){
    // console.log(i);                        //* my method
}


for (let i=10;i>=2;i-=2){
    // console.log(i);                         //* backward even numbers
}

//* Infinite loops
// infinite loops are bad for progammers 
// it run until it occupy all of our device memory
// it will not let other code to run
// it will hang our browser
// always check yor loop that if it return on true condition only then it is a infinite loop!

// ex

// for(let i=1; i>=0; i++){
    // console.log("HANG!!");            //* Don't run!
// }


//* multiplication table for 5

for(let i=1;i<=10;i++){
    // console.log(5*i);                  //* my method
}

for(let i=5; i<=50; i+=5){
    // console.log(i);                      //* mam method
}

// let n = prompt("What's your num!")
for (let i=1; i<=10; i++){
    // console.log(n*i);                      //* input->user&print=table
}

// let n = prompt("What's your num!")
//// for(let i=n; i<=n*10; i+=n){              //* mam method
//     // console.log(i);
// }
// TODO: it will not work because prompt give String value
//* we need to convert string into number
//* for that we need to use parseInt() method
// it will convert string into number

// let n = prompt("What's your num!")
// n = parseInt(n);
// for(let i=n; i<=n*10; i+=n){          //* correct code   
//     console.log(i);
// }


//* Nested loops


for(let i=1; i<=4; i++){
    // console.log(`outer loop ${i}`);
    for(let j=1; j<=4; j++){               //* don't understand-->dryRun
        // console.log(j);
    }
}

//* while loop
// i like for loop 
// just remember this concept

// let i = 1;  //* Initilisation
// while(i<=10){  //* condition
//    console.log(5*i);            //* table of 5
//    i++;  //* updation
// }


// TODO: Favorite Movie program
// user should guess my fav movie until they tyoe "quit"
// we gonna use white loop 

// let favMovie = "kgf";                              //* our correct ans
// let guess = prompt("What's my favorite movie (type quit for out of the game").toLowerCase(); //* takeing input and changing it to lower case
// let i = 1;            //* for letting user know about there try number
// while((guess!=favMovie)&&(guess!="quit")){   //* condition
        // if(guess == "quit"){
        //     console.log("You Quit!");  //* code for quit input
        //     break;
        // }
//     console.log(`Wrong!! Try no. ${i}`);
//     i++;                                            //* try no. update
//     guess = prompt("Wrong guess Plese try again!").toLowerCase();         //* calling for input until correct ans
// }
// if(guess == favMovie){
//     console.log(`Correct!! Try no. ${i}`);  //* output if correct ans
// }
 

//* Break Keyword
// it is use to get out of loop
// syntax --> break;

// let i=1;
// while(i<=5){
//    console.log(i);
//    if(i==3){ //* if i -> 3 then get out of this loop
//     break;
//    }
//    i++;
// }


//* Loops with Arrays
// loops use to access all the items of an Array

// let fruit = ["orange", "mango", "lichi", "kiwi", "banana"];
// for(i=0; i<fruit.length; i++){
//     console.log(`your ${i+1} item is ${fruit[i]}`);
// }


//* Nested Array with Nested Loops
// use for 2-d Array

// let hero = [["ironman", "caption america", "wanda"], ["thor", "loki", "thanos"]];
// for(let i=0; i<hero.length; i++){
//     for(let j=0; j<hero[i].length; j++){
//         console.log(`Array no. ${i+1}, item no. ${j+1} --> ${hero[i][j]}`);
//     }
// }

//* for of loops
// use when we need to access collection of items
// syntax --> for(element of collection){
    // do somthing
// }

// let fruits = ["mango", "lichi", "banana", "kiwi"];
// for(healthyItems of fruits){ //* it take evry item of fruits and store that in healthyItems.
//     console.log(healthyItems); //* every items of fruits print on the console
// }

// let name = "anshuGupta";
// for(allChar of name){ //* take all charactoe of name and placed it in allChar
//     console.log(allChar); //* print all the charactor of name
// }
// output ->
// a
// n
// s
// h
// u
// G
// u
// p
// t
// a

//* nested for of loops

// let heros = [["sm", "ca", "im"], ["sm", "bm", "ww"]];
// for(list of heros){ //* access the both arrays
//     for(hero of list){ //* access the items of both arrays
//         console.log(hero);
//     }
// }
// it will print all the items of both arrays


// TODO: Make a TODO app 

// let todo = [];
// let req = prompt("What you want to do?").toLowerCase();
// let add;
// while(true){
//     if(req == "quit"){
//         console.log("You quit the APP!");
//         break;
//     } if(req == "list"){
//         console.log("------------");
//         for(lists of todo){
//             console.log(`TODO ${lists}`);
//         }
//         console.log("------------");
//     } else if(req == "delete"){
//         console.log(`Your deleted item is ${todo.pop()}`);
//     } else if(req == "add"){
//         add = prompt("Add a TODO");
//         console.log(`You have now ${todo.push(add)} TODO`);
//     } req = prompt("Enter the request");
// }
