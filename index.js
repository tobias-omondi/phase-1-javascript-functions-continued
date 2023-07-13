// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();

function mondayWork(toDo = 'go to the office') {
    return `This Monday, I will ${toDo}.`
}

mondayWork();

function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`
    }
}

wrapAdjective()();