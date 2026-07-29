let saldoJosse = 1000;
let saldoMario = 500;

const taxajuros = 0.02;
const saldoComJuros = saldoJose * (1 + taxaJuros);

const contaJose = {
titular: "José",
saldo: saldoJose
};

const contaMario = {
titular: "Mario",
saldo: saldoMario
};

const contas = [contaJose, contaMario];

contas.forEach((conta) => {
console.log("Titular: $(conta.titular) tem R$ ${conta.saldo).);
});

