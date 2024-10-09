function Contador() {
    let Cuenta = 0;

    return {
        Aumentar: function() {
            Cuenta++;
            console.log(`La cuenta es: ${Cuenta}`);
        },
        ObtenerCuenta: function() {
            return `El valor actual de la cuenta es: ${Cuenta}`;
        }
    };
}
const miContador = Contador();
miContador.Aumentar();
miContador.Aumentar();
console.log(miContador.ObtenerCuenta());
