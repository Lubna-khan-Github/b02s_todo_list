#! /usr/bin/env  node




import inquirer from "inquirer"
import chalk from "chalk"

let todo_list: string[] = [];
let condition : boolean = true;
while(condition === true){

// ******************** user option ************//
    let option = await inquirer.prompt([{
        name : 'user_option',
        message :chalk.yellow( 'select an option '),
        type : 'list',
        choices :['Add', 'remove']
    }])
// ******************** Add ************************//
if(option.user_option === 'Add'){
    let  ans = await inquirer.prompt([{
        name :'user_ans',
        message :chalk.green( 'Do you want to add something in the list'),
        type : 'input',
    }]);
    if(ans.user_ans !== ""){
        todo_list.push(ans.user_ans)
       console.log(todo_list);
    } else{
        console.log(chalk.magenta('please add something to in todo list'));
    }
}
    //***************** Remove **********************//
    else if(option.user_option === 'remove'){
        let remove = await inquirer.prompt([{
            name :"remove_item",
            message :chalk.red( 'select item to remove'),
            type : 'list',
            choices : todo_list
        }]);
        let index_remove = todo_list.indexOf(remove.remove_item);
        if(index_remove >= 0){
            todo_list.splice(index_remove , 1);
            console.log('you removed: ' ,remove.remove_item);
            console.log(todo_list);
        }
    } 
    // ***********************************confirm*****************//
let user_answer = await inquirer.prompt([{
    name : 'selection',
    message : chalk.blue('Do you want to continue ?'),
    type : 'confirm',
    default : true,
}]);
    
if(user_answer.selection === false){
    condition = false;
}    
}

console.log(chalk.yellow(`Thank you for using to do list`));

    
    
    
    

    