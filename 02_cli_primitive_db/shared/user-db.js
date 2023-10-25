import fs from "fs";

let dbContent = [];

export function addUserDB(content) {
    try {
        const users = fs.readFileSync("./shared/db/users.txt", "utf-8");

        if (users.length === 0) {
            dbContent.push(content);
            fs.writeFileSync("./shared/db/users.txt", JSON.stringify(content));
        } else {
            let usersList = JSON.parse(users);
            usersList.push(content);
            fs.writeFileSync("./shared/db/users.txt", JSON.stringify(usersList));
        }

    } catch (error) {
        if (error.code === "ENOENT") {
            dbContent.push(content);
            fs.writeFileSync("./shared/db/users.txt", JSON.stringify(dbContent));
        }
    }
}

export function getUsers() {
    try {
        const users = fs.readFileSync("./shared/db/users.txt");
        return JSON.parse(users);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Please add users in db");
        }
        return false;
    }
}
