import { createInterface } from "readline";
import { selectedNumber } from "./sort.js";

export function inputText() {
    let array = [];

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.question("Type in 10 words and numbers separated by a space: ", (value) => {
        array = value.split(" ");
        console.log(array);
        console.log('1. Sort words alphabetically\n2. Show numbers from lesser to greater\n3. Show numbers from bigger to smaller\n4. Display words in ascending order by number of letters in the word\n5. Show only unique words\n6. Display only unique values from the set of words and numbers entered by the user\n');
        
        rl.question("Select (1-5) or Exit and press: ", (value) => {
            if(value == "exit" || value == "Exit"){
                rl.close();
            } else {
                selectedNumber(Number(value), array);
                inputText();
            }
        })
    })
}
