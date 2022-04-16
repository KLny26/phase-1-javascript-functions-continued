function saturdayFun(activity = "roller-skate") {
return(`This Saturday, I want to ${activity}!`);
}

function mondayWork(method = "go to the office"){
    return(`This Monday, I will ${method}.`);
}

function wrapAdjective (meow ="*"){
    return function (typeOfWorker = "a hard worker"){
        return(`You are ${meow}${typeOfWorker}${meow}!`);
    }
}
