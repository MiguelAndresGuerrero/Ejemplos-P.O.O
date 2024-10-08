class CuentaBancaria {
    constructor(saldoInicial) {
        let Saldo = saldoInicial;
        this.AgregarSaldo = function() {
            return `El saldo que tienes es: ${Saldo}`;
        };
        this.Deposito = function(monto) {
            if (monto > 0) {
                Saldo += monto;
                return `Has Depositado ${monto}, ${this.AgregarSaldo()}`;
            } else {
                return `El monto debe ser positivo`;
            }
        };
        this.retirar = function(monto) {
            if (monto > 0 && monto <= Saldo) {
                Saldo -= monto;
                return `Retiraste ${monto}, ${this.AgregarSaldo()}`;
            } else {
                return `Fondos insuficientes`;
            }
        };
    }
}

const miNequi = new CuentaBancaria(900);

console.log(miNequi.AgregarSaldo());
console.log(miNequi.Deposito(200));
console.log(miNequi.retirar(300));
console.log(miNequi.retirar(900));
