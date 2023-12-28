const calculator = {
    add: function(a, b) {
        if (isNaN(a,b)) {
            return "Not a Number!"
        };
        return a + b;
    },
    subtract: function(a, b) {
        if (isNaN(a,b)) {
            return "Not a Number!"
        };
        return a - b;
    },
    divide: function(a, b) {
        if (isNaN(a,b)) {
            return "Not a Number!";
        };
        return a / b;
    },
    multiply: function(a, b) {
        if (isNaN(a,b)) {
            return "Not a Number!"
        };
        return a * b;
    }
}

module.exports = calculator;