class Figura {
    calcularArea() {
        console.log(`No se puede calcular el area de una figura generica`);
    }
}

class circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        const area = Math.PI * this.radio * this.radio;
        console.log(`El area del circulo es: ${area.toFixed(2)}`);
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        const area = this.lado * this.lado;
        console.log(`El area del cuadrado es: ${area}`);
    }
}

const miCirculo = new circulo(10);
const miCuadrado = new Cuadrado(6);

miCirculo.calcularArea();
miCuadrado.calcularArea();