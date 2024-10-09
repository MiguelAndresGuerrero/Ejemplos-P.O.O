class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Presencion() {
        console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    Presencion() {
        super.Presencion();
        console.log(`Soy estudiante de ${this.grado}`);
    }
}

const Estudiante1 = new Estudiante('Miguel', 19, 'Campuslands');
Estudiante1.Presencion();