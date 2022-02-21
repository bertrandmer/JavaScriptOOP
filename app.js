console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name,pets, residence,hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
        
    }
    info() {
        console.log('${this.name}\n${this.pets}\n${this.residence}\n${this.hobbies}');

    }
    greeting(){
        console.log("Hello fellow person!");
    }
    class Coder extends Person{
        contructor(name,pets,residence,hobbies){
            super(name,pets,residence,hobbies);
            this.occupation = "Full Stack Web Developer";
            }
            greeting(){
                console.log("Hi True Coder!");
            }

            const Bertrand = new Person("Bertrand",1,"Virginia",["Reading","Dancing"])
            const Mercier = new Coder("Bertrand",2,"Virginia",["Coding","Walking"])
            console.log(Bertrand.info());
            console.log(Mercier.info());
        }


    }




}