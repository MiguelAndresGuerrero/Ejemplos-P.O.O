console.log('Juego de cartas');

class cartas {
    jugar() {
        console.log('Se juega una carta');
    }
}

class CartaAtaque extends cartas {
    jugar() {
        console.log('Ataque critico!! El oponente recibe daño critico');
    }
}

class CartaDefensa extends cartas {
    jugar() {
        console.log('Defensa activada, Reduccion de daño enemigo');
    }
}
class CartaCurativa extends cartas {
    jugar() {
        console.log('Curacion, Se recuperan puntos de salud');
    }
}

const cartaAtaque = new CartaAtaque();
const cartaDefensa = new CartaDefensa();
const cartaCurativa = new CartaCurativa();

cartaAtaque.jugar();
cartaDefensa.jugar();
cartaCurativa.jugar();