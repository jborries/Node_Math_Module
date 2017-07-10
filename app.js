var my_module = require('./mathlib'); //Did not use require('./mathlib')() because just importing a JS OBJECT from another file, not an actual function
my_module.add(5,5);
my_module.multiply(5,5);
my_module.square(5);
my_module.random(5,15);
