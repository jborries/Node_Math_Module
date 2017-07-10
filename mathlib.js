module.exports = { //don't need to write module.exports = function(){...} in this instance because just exporting an object

    add: function(num1, num2) {
        console.log("the sum is:", num1 + num2);
    },
    multiply: function(num1, num2){
        console.log("the product is:", num1 * num2);
    },
    square: function(num){
       console.log("the square is:", num * num);
    },
    random: function(min, max){
       console.log(Math.floor(Math.random()*(max-min+1) + min));
    }

};
