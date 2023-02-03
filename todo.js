//todo list
"use strict"
const toDo = "to do";
const inProgress = 'in progress';
const done = 'done'

const todo = {
    list: {
        'brush your teeth': done,
        "create a new practice task": inProgress,
        "make a bed": done,
        "write a post": toDo,
    },

    changeStatus(task, status) {
        if (task in todo.list) {
            todo.list[task] = status;
            console.log(`you add a status '${status}' in the task '${task}'`);
        } else if (!(task in todo.list)) {
            console.log('a task is not defined');
        }
    }, addTask(task, status) {
        if (task in todo.list) {
            console.log(`task '${task}' is already use`);
        } else if (!(task in todo.list)) {
            todo.list[task] = status;
            console.log(`task '${task}' has been created`);
        }
    }, deleteTask(task) {
        delete todo.list[task];
        console.log(`task '${task}' has been deleted`);
    }, showList() {
        console.log('To Do:');
        for (const show in todo.list) {

            if (todo.list[show] === toDo) {
                console.log(`  ${show};`);
            };
        };
        console.log('In Progress:');
        for (const show in todo.list) {

            if (todo.list[show] === inProgress) {
                console.log(`  ${show};`);
            };
        };
        console.log('Done:');
        for (const show in todo.list) {

            if (todo.list[show] === done) {
                console.log(`  ${show};`);
            };
        };
    }
};



todo.changeStatus("write a post", done);
console.log(todo.list);
todo.addTask('have a walk');
console.log(todo.list);
todo.deleteTask('have a walk');
console.log(todo.list)

todo.showList();
