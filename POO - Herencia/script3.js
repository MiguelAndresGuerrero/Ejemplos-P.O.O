class Empleado {
    constructor (nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    DetallesEmpleados() {
        console.log(`El empleado ${this.nombre}, tiene un salario de ${this.salario} USD`);
    }
}

class Programador extends Empleado {
    constructor(nombre, salario, lenguajes) {
        super(nombre, salario);
        this.lenguajes = lenguajes;
    }

    MostrarLenguajes() {
        console.log(`El programador ${this.nombre} maneja los siguientes lenguajes: ${this.lenguajes.join(' - ' )} `);
    }
}

const Programador1 = new Programador('Miguel', 600, ['JavaScript', 'Python', 'HTML', 'CSS'])
Programador1.DetallesEmpleados();
Programador1.MostrarLenguajes();