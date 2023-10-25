import inquirer from "inquirer";

import { addUserDB, getUsers } from "./user-db.js";


export function userInput() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "username",
                message: "Enter your name (If you want to exit press Enter): ",
            },
            {
                type: "confirm",
                name: "confirmUserSearch",
                message: "Would you want to search user in DB?",
                when: (value) => value.username === "",
                default: true
            },
            {
                type: "list",
                name: "gender",
                message: "Select your gender:",
                choices: ["male", "female"],
                when: (value) => {
                    if (value.confirmUserSearch == false) {
                        return false;
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "age",
                message: "Input your age: ",
                validate: age => {
                    if (!Number.parseInt(age)) {
                        return "It has to be a number";
                    }
                    return true;
                },
                when: (value) => {
                    if (value.confirmUserSearch == false) {
                        return false;
                    }
                    return true;
                }
            }
        ],
    )
        .then((answer) => {
            console.log(answer);
            if (answer.username !== "") {
                addUserDB(answer);
                userInput(answer);
            }
            if (answer.confirmUserSearch == false) {
                searchUser();
            }
        })
        .catch(error => console.log(error));

}

function searchUser() {
    const checkUsers = getUsers();

    console.log(checkUsers);

    if (checkUsers) {
        inquirer.prompt([
            {
                type: "input",
                name: "findUser",
                message: "Enter user's name: ",
            },
        ]).then(answer => {
            const user = checkUsers.find(value => {
                if (value.username.toLowerCase() == answer.findUser.toLowerCase()) {
                    return value;
                } else {
                    return false;
                }
            });
            if (user) {
                console.log(`User ${user.username} was found\n`, user);
            } else {
                console.log(`User ${answer.findUser} wasn't found`);
            }

        })
    } else {
        userInput();
    }

}

