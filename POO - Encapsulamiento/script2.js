const edadSimbolo = Symbol("edad");
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        this[edadSimbolo] = 25;
    }

    getEdad() {
        let Years = `Edad: `+ Number(this[edadSimbolo]);
        return Years;
    }
}

const maria = new Persona("Maria");
console.log(maria.getEdad());