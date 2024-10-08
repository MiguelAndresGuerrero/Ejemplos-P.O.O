class Comida {
    constructor(id, nombre, color) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }
    nombrar() {
        return `${this.nombre} de color ${this.color}`;
    }
}

class Galleta extends Comida {
    constructor(id,nombre,color, sabor) {
        super(id, nombre, color);
        this.sabor = sabor;
    }
    NameGalleta() {
        return `Galletas ${this.nombre} sabor ${this.sabor}`;
    }
}

const Manzana = new Comida(1, 'manzana', 'rojo');
const pera = new Comida(2, 'Pera', 'verde');
const oreo = new Galleta(3, 'chokis', 'marron', 'vainilla');
const chokis = new Galleta(4, 'Festival', 'marron', 'chocolate')

console.log(Manzana.nombrar());
console.log(pera.nombrar());

console.log(oreo.NameGalleta());
console.log(chokis.NameGalleta());
