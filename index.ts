#!/usr/bin/en node    //shebang operating system to run it with node.js///

//inquirer is imporeted, which is ca command line interface for node.js//
import inquirer from "inquirer";

//Declare a contant 'answer' and assign it to the result of inquirer.prompt function//

const answer:{
    sentence: string       //IntelliSense is a code-completion aid that includes a number of features: List Members, Parameter Info, Quick Info, and Complete Word
} = await inquirer.prompt([
    {
        name: "sentence",  //property //
        type: "input",
        message: "Enter a sentence to count the word in it: "
    }
]);

const words = answer.sentence.trim().split(" ");  //  .  notation methode // trim removes spaces only from start and at the end // split convert alphabets into proper words, and ( ) bracket have space which splits words to word and make them countable //


//print the array of words to the console.log
console.log(words);

console.log(`The number of words in the sentence are ${words.length}`);


