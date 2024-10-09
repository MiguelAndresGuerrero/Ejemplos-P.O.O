console.log('Juego de cartas');

class cartas {
    jugar() {
        console.log('Se juega una carta');
    }
}

class CartaAtaque extends cartas {
    jugar() {
        console.log('Ataque critico!! El oponente recibe 60 puntos de daño');
        console.log('El oponente conserva 30 puntos de vida');
    }
}

class CartaDefensa extends cartas {
    jugar() {
        console.log('Defensa activada, Reduccion de daño enemigo reducido');
        console.log('Puntos de escudo al 100%');      
    }
}

console.log('Turno del rival');


class CartaCurativa extends cartas {
    jugar() {
        console.log('Curacion, Serecuperan 40 puntos de salud');
        console.log('Ahora tienes 70 puntos de vida');
    }
}

const CartaAtaque = new CartaAtaque();
const CartaDefensa = new CartaDefensa();
const CartaCurativa = new CartaCurativa();

CartaAtaque.jugar();
CartaDefensa.jugar();
CartaCurativa.jugar();