let generate_id = () => Math.floor(Math.random() * 1000000); //arrow function

const data = {
    tasks: [],
    show_all_tasks: function(){ //object method
        console.log("All tasks:");
        let index = 1;
        data.tasks.forEach(task => {
            console.log(`${index}. ${task.title}, Done: ${task.isDone}`);
            index++;
        });
    },
    show_stats: function(){ //object method
        console.log("Your statistics:");
        let taskCount = data.tasks.length;
        console.log(`Number of all tasks: ${taskCount}`);
        let doneTasks = data.tasks.filter(task => task.isDone == true);
        console.log(`Number of tasks done: ${doneTasks.length}`);
        let productivity = Math.floor((doneTasks.length / taskCount) * 100);
        console.log(`Percentage of tasks done: ${productivity}%`);
    },
};

function add_task(title){ //regular function
    const task = {
        id: generate_id(),
        isDone: false,
        isActive: true, 
        title: title,
        priority: "middle",
    };
    data.tasks.push(task);
    console.log(`Added task: ${task.title}`);
}

let get_id_by_title = function(title){ //function expression
    let task = data.tasks.find(task => task.title == title);
    if (!task){ 
        console.log("Error: Task is not found"); 
        return; 
    }
    return task.id;
}

function filter_tasks(parameter){ //regular function
    console.log(`Tasks filtered by ${parameter}`);
    let filteredTasks;
    if (parameter == "isDone"){
        filteredTasks = data.tasks.filter(task => task.isDone == true);
        filteredTasks.forEach(task => {
            console.log(`${task.title}, Done: ${task.isDone}`);
        });
    }
    else if (parameter == "isActive"){
        filteredTasks = data.tasks.filter(task => task.isActive == true);
        filteredTasks.forEach(task => {
            console.log(`${task.title}, Active: ${task.isActive}`);
        });
    }
    else { console.log("Error: invalid parameter"); return; }
}

function mark_as_done(id){ //regular function
    let task = data.tasks.find(task => task.id == id);
    if (!task){ 
        console.log("Error: Task is not found"); 
        return; 
    }
    task.isDone = true;
    task.isActive = false;
}

let delete_task = (id) => data.tasks = data.tasks.filter(task => task.id != id); //arrow function

add_task("Meditation");
add_task("Go to gym");
add_task("Read for 1h");
mark_as_done(get_id_by_title("Go to gym")); //callback
delete_task(get_id_by_title("Read for 1h")); //callback
add_task("Learn JS");
filter_tasks("isDone");

data.show_all_tasks();
data.show_stats();
