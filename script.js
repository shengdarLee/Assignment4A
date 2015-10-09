//COMM644
//Assinment4
//-----------------------------------------------------------------
//Practice with JavaScript OOP Concepts (10 points)

// STEP 1
/*
1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.
*/
/*
        var ANIMAL = ANIMAL || {};
        ANIMAL.Cat = function() {
            
        }
        ANIMAL.dog = function() {
            
        }
*/

// STEP 2
/*
2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.
*/
/*
        function Cat() {
        
        }
        var Dog = function() {
        
        }
*/

// STEP 3
/*
3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.
*/
/*
        function Cat() {
        
        }
        var Dog = function() {
        
        }
        var cat = new Cat();
        var dog = new Dog();
*/

// STEP 4
/*
4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
*/
/*
        var Aminal = function () {
            console.log("The Animal has been created");
        }
        var cat = new Aminal();
*/

// STEP 5
/*
5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
*/
/*
        var Aminal = function (par) {
            console.log(par);
        }
        var cat = new Aminal("The Animal has been created");
*/

// STEP 6
/*
6.	Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 
*/
/*
        function Animal(type, breed, color, height, length) {
            this._type = type;
            this._breed = breed;
            this._color = color;
            this._height = height;
            this._length = length;
        }
        var dog = new Animal('dog', 'Golden Retriver', 'brown', 30, 40);
*/

// STEP 7
/*
7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
*/
/*
        function Animal(type, breed, color, height, length) {
            this._type = type;
            this._breed = breed;
            this._color = color;
            this._height = height;
            this._length = length;
        }
       var cat = new Animal();
        for (var property in cat) {
            console.log(property);
        }
*/

// STEP 8
/*
8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
*/
/*
        function Animal(type, breed, color, height, length) {
            this._type = type;
            this._breed = breed;
            this._color = color;
            this._height = height;
            this._length = length;
        }
        Animal.prototype.speak = function() {
                if (this._type.toLowerCase() == "dog") {
                    console.log("The " + this._color + " dog is barking!");
                } else {
                    console.log("The " + this._color + " cat is meowing!");
                }
            }

        var dog = new Animal('dog', 'Golden Retriver', 'brown', 30, 40);
        dog.speak();
*/

// STEP 9
/*
9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
*/
/*
        function Animal(type, breed, color, height, length) {
            var _type = type;
            var _breed = breed;
            var _color = color;
            var _height = height;
            var _length = length;
            var checkType = function() {
                if (_type.toLowerCase() == "dog") {
                    return "dog";
                } else {
                    return "cat";
                }
            }
            this.speak = function() {
                return checkType();
            }
        }

        var animal = new Animal('dog', 'Golden Retriver', 'brown', 30, 40);
		console.log("The " + animal.speak() + " has made a noise!");
*/

// STEP 10
/*
10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
*/
/*
		String.prototype.findWords = function(word) {
			var parsedWords = [];
			var count = 0;
			parsedWords = this.split(" ");
			for (var i = 0; i < parsedWords.length; i++) {
				if (parsedWords[i].toLowerCase() == word.toLowerCase()) {
				count += 1;
				}
			}
			return count;
		}
		var paragraph = 'As the name object-oriented suggests, objects are important. An object is a representation of a "thing" (someone or something). The thing can be anything from a real-life object to a more convoluted concept. Taking a common object like a cat for example…it has certain characteristics (color, name, weight, and so on) and can perform some actions (meow, sleep, eat, run, and so on). The characteristics of the object are properties, and the actions are methods.';
		console.log(paragraph.findWords("object"));
*/

//Does My Vehicle Need An Oil Change? (10 points)
//-----------------------------------------------------------------

// STEP 11 -20

/*
        var Vehicle = function(make, model, totalMiles, lastOilChange) {
            this._make = make;
            this._model = model;
            this._totalMiles = totalMiles;
            this._drivenMiles = 0;
            this._type = "";
            this._lastOilChange = lastOilChange;
        }
        Vehicle.prototype.drive = function(miles) {
            this._drivenMiles += miles;
            return this;
        }
        Vehicle.prototype.checkOil = function() {
            if (this._totalMiles - this._lastOilChange + this._drivenMiles >= 3000) {
                return "You need an oil change!";
            } else {
                return this;
            }
        }
        var Car = function(doorCount) {
            this._doorCount = doorCount;
            if (this._doorCount > 2) {
                this._type = "Sedan";
            } else {
                this._type = "Coupe";
            }
        }

        Car.prototype = new Vehicle("Toyota", "Camry", 167000, 165000);
        var myCar = new Car(4);
        console.log(myCar.drive(2000).checkOil());
*/

//The Recipe Card (10 points)	
//-----------------------------------------------------------------
/*
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/

/*
        var Recipe = function(title, servings, ingredients) {
            this._title = title;
            this._servings = servings;
            this._ingredients = ingredients;
            this.printRecipe = function() {
                console.log(this._title);
                console.log("Serves: " + this._servings);          
                console.log("Ingredients:");
                for (var i in this._ingredients) {
                    console.log("- " + this._ingredients[i]);          
                }
            }
        }
        var recipe = new Recipe("Guacamole", 4, ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);
        recipe.printRecipe();
 */ 

//The Reading List (10 points)
//-----------------------------------------------------------------
/*
Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
/*
        var bookList = [];
        bookList[0] = {"title":"murach's Juery 2nd Edition", "author":"Zak Ruvalcaba and Anne Boehm", "isRead":true};
        bookList[1] = {"title":"Sam's Teach Yourself JavaScript", "author":"Phil Ballard", "isRead":false};
        bookList[2] = {"title":"JavaScript & AJAX for Dummies", "author":"Andy Harris", "isRead":false};
        bookList[3] = {"title":"Mobile Web Design for Dummies", "author":"Janine Warner and David LaFontain", "isRead":false};
        bookList[4] = {"title":"murach's HTML5 and CSS", "author":"Zak Ruvalcaba and Anne Boehm", "isRead":true};

        var ReadBook = function(bookList) {
            for (var i in bookList) {
                var theBook = bookList[i];
                if (theBook.isRead) {
                    console.log("You already read " + theBook.title + " by " + theBook.author);
                } else {
                     console.log("You still need to read " + theBook.title + " by " + theBook.author);                  
                }
            }
            }
       var readBook = new ReadBook(bookList);
*/

//Fill in the Blanks (10 points)
//-----------------------------------------------------------------
/*
Fill in the blanks to make this program work.
(function() {
    var person = {
        // add code here
    };

    var car = {
        // add code here
    };

    // print vroom vroom
    car.drive();

    // print 'I'm rich'
    if (car.price > 100000) {
        person.buy(car);
    }
}());
*/
/*
        (function() {
            var person = {
                buy:function(car){
                    if(car.price>100000){
                        console.log("I'm rich");
                    }
                }
            };

            var car = {
                price:100001,
                drive:function(car){
                    console.log("vroom vroom");
               }
            };

            // print vroom vroom
            car.drive();

            // print 'I'm rich'
            if (car.price > 100000) {
                person.buy(car);
            }
        }());
*/
