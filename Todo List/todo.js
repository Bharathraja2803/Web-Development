let command = prompt("Enter the command");
const listOfTodos = [];
while (command && command !== "Quit") {
    switch (command) {
        case "New":
            {
                console.log("Inside 'New'");
                let todo = prompt("Enter the todo");
                while (true) {
                    if (todo) {
                        listOfTodos.push(todo);
                        console.log(`Todo ${todo} added to the list`);
                        break;
                    } else {
                        todo = prompt("Enter valid todo");
                    }
                }
                break;
            }
        case "List":
            {
                console.log("Inside 'List'");
                console.log(`${"*".repeat(10)}`);
                for (let i = 0; i < listOfTodos.length; i++) {
                    console.log(`${i}: ${listOfTodos[i]}`);
                }
                console.log(`${"*".repeat(10)}`);
                break;
            }
        case "Remove":
            {
                console.log("Inside 'Remove'");
                console.log(`${"*".repeat(10)}`);
                for (let i = 0; i < listOfTodos.length; i++) {
                    console.log(`${i}: ${listOfTodos[i]}`);
                }
                console.log(`${"*".repeat(10)}`);
                let index = parseInt(prompt("Enter the index to remove"));
                while ((!(index)) || (index < 0 && index >= listOfTodos.length)) {
                    index = parseInt(prompt("Enter the valid index to remove"));
                }
                console.log(`Removing ${listOfTodos[index]} from list`);
                listOfTodos.splice(index, 1);
                break;
            }
        // case "Quit":
        //     {
        //         console.log("Quiting the application");
        //         break;
        //     }
        default:
            {
                console.log("Invalid Command");

            }
    }
    command = prompt("Enter the command");
}
