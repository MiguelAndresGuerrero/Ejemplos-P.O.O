class Animal {
    Sonido(){
        return `Este animal hace: `;
    }
}

class Perro extends Animal {
    Sonido(){
        return `Guau`;
    }
}

class Gato extends Animal {
    Sonido(){
        return `Miau`;
    }
}

class Vaca extends Animal {
    Sonido(){
        return `Muuuu`;
    }
}

class Lobo extends Animal {
    Sonido() {
        return `Auuuuu`;
    }
}

const Dog = new Perro();
const Cat = new Gato();
const Cow = new Vaca();
const Wolf = new Lobo();

console.log(Dog.Sonido());
console.log(Cat.Sonido());
console.log(Cow.Sonido());
console.log(Wolf.Sonido());
