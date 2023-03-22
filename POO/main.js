class Person {
    
    constructor(name, weight, height, age, cedula) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.cedula = cedula;
    }

    calcIMC() {
        const imc = this.weight/(this.height*this.height)
        return `${this.name} su IMC es ${imc}`;
    }

    info() {
        return `Su nombre es ${this.name} y su cédula es ${this.cedula}`
    }

}

const santiago = new Person('Santiago', 60, 1.82, 19, '100200300');

const guy1 = new Person('TY', 76, 1.79, 30, '400500600');

const guy2 = new Person('Paige', 68, 1.66, 22, '700800900');

console.log(santiago.info());
console.log(santiago.calcIMC());
console.log('----------------------------------------------');
console.log(guy1.info());
console.log(guy1.calcIMC());
console.log('----------------------------------------------');
console.log(guy2.info());
console.log(guy2.calcIMC());