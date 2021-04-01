function saturdayFun(activity='roller-skate') {
    return  `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(work='go to the office') {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(string='*') {
    return function(vis='special') {
        return `You are ${string}${vis}${string}!`;
    }
}

const Calculator = {
    add: function(num1,num2) {
        return num1 + num2;
    },
    subtract: function(num1,num2) {
        return num1 - num2;
    },
    multiply: function(num1,num2) {
        return num1 * num2;
    },
    divide: function(num1,num2) {
        return num1 / num2;
    }

}

function actionApplyer(integer,arr) {
    if (arr.length == 0) {
        return integer;
    }
    else {
        arr.forEach(function(func) {
            integer = func(integer)
        });
        return integer
    }
}