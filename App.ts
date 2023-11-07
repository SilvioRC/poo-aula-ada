import Pessoa from "./Pessoa";
//const Pessoa = require("./Pessoa")
const professor  = new Pessoa();

professor.cadastrar(
    1,
    "Pedro José",
    "M",
    "111.111.111-11",
    "01/01/2000",
    "pedrojose@outlook.com",
    "Rua Carlos do Nascimento 55 - Brasilia - DF"
)
professor.excluir()

console.log("Olá mundo")