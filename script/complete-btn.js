// getting the btns
const card1 = gettingElementById("card-btn-1");
const card2 = gettingElementById("card-btn-2");
const card3 = gettingElementById("card-btn-3");
const card4 = gettingElementById("card-btn-4");
const card5 = gettingElementById("card-btn-5");
const card6 = gettingElementById("card-btn-6");


let count = 0;
const totalTask = convertedNumber("assigned-task");
let taskRemaining = totalTask;
const completedNumber = convertedNumber("finished-task");
let finishedTask = completedNumber;


// adding the alerts and getting the count
card1.addEventListener("click", function () {
    alert("Board Updated Succesfully.");
    count = count + 1;
    taskRemaining = totalTask - count;
    if(taskRemaining === 0){
        alert("Congrats!!! You have completed all the current task.");
    }
    settingValue("assigned-task",taskRemaining);
    finishedTask = completedNumber + count;
    settingValue("finished-task",finishedTask);
    card1.classList.add("btn-disabled");
    card1.classList.remove("utility-btn");

    // appending the history
    const taskTitle = gettingElementById("card-title-1").innerText;
    const parentHistory = gettingElementById("history-bar");
    const history = document.createElement("p");
    history.innerText = `You have completed the Task ${taskTitle} at ${gettingTime()}`;
    history.classList.add("history");
    parentHistory.appendChild(history);
});
card2.addEventListener("click", function () {
    alert("Board Updated Succesfully.");
    count = count + 1;
    taskRemaining = totalTask - count;
    if(taskRemaining === 0){
        alert("Congrats!!! You have completed all the current task.");
    }
    settingValue("assigned-task",taskRemaining);
    finishedTask = completedNumber + count;
    settingValue("finished-task",finishedTask);
    card2.classList.add("btn-disabled");
    card2.classList.remove("utility-btn");

    // appending the history
    const taskTitle = gettingElementById("card-title-2").innerText;
    const parentHistory = gettingElementById("history-bar");
    const history = document.createElement("p");
    history.innerText = `You have completed the Task ${taskTitle} at ${gettingTime()}`;
    history.classList.add("history");
    parentHistory.appendChild(history);
});
card3.addEventListener("click", function () {
    alert("Board Updated Succesfully.");
    count = count + 1;
    taskRemaining = totalTask - count;
    if(taskRemaining === 0){
        alert("Congrats!!! You have completed all the current task.");
    }
    settingValue("assigned-task",taskRemaining);
    finishedTask = completedNumber + count;
    settingValue("finished-task",finishedTask);
    card3.classList.add("btn-disabled");
    card3.classList.remove("utility-btn");

    // appending the history
    const taskTitle = gettingElementById("card-title-3").innerText;
    const parentHistory = gettingElementById("history-bar");
    const history = document.createElement("p");
    history.innerText = `You have completed the Task ${taskTitle} at ${gettingTime()}`;
    history.classList.add("history");
    parentHistory.appendChild(history);
});
card4.addEventListener("click", function () {
    alert("Board Updated Succesfully.");
    count = count + 1;
    taskRemaining = totalTask - count;
    if(taskRemaining === 0){
        alert("Congrats!!! You have completed all the current task.");
    }
    settingValue("assigned-task",taskRemaining);
    finishedTask = completedNumber + count;
    settingValue("finished-task",finishedTask);
    card4.classList.add("btn-disabled");
    card4.classList.remove("utility-btn");

    // appending the history
    const taskTitle = gettingElementById("card-title-4").innerText;
    const parentHistory = gettingElementById("history-bar");
    const history = document.createElement("p");
    history.innerText = `You have completed the Task ${taskTitle} at ${gettingTime()}`;
    history.classList.add("history");
    parentHistory.appendChild(history);
});
card5.addEventListener("click", function () {
    alert("Board Updated Succesfully.");
    count = count + 1;
    taskRemaining = totalTask - count;
    if(taskRemaining === 0){
        alert("Congrats!!! You have completed all the current task.");
    }
    settingValue("assigned-task",taskRemaining);
    finishedTask = completedNumber + count;
    settingValue("finished-task",finishedTask);
    card5.classList.add("btn-disabled");
    card5.classList.remove("utility-btn");

    // appending the history
    const taskTitle = gettingElementById("card-title-5").innerText;
    const parentHistory = gettingElementById("history-bar");
    const history = document.createElement("p");
    history.innerText = `You have completed the Task ${taskTitle} at ${gettingTime()}`;
    history.classList.add("history");
    parentHistory.appendChild(history);
});
card6.addEventListener("click", function () {
    alert("Board Updated Succesfully.");
    count = count + 1;
    taskRemaining = totalTask - count;
    if(taskRemaining === 0){
        alert("Congrats!!! You have completed all the current task.");
    }
    settingValue("assigned-task",taskRemaining);
    finishedTask = completedNumber + count;
    settingValue("finished-task",finishedTask);
    card6.classList.add("btn-disabled");
    card6.classList.remove("utility-btn");

    // appending the history
    const taskTitle = gettingElementById("card-title-6").innerText;
    const parentHistory = gettingElementById("history-bar");
    const history = document.createElement("p");
    history.innerText = `You have completed the Task ${taskTitle} at ${gettingTime()}`;
    history.classList.add("history");
    parentHistory.appendChild(history);
});
