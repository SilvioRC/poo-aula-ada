import Curso from "./Curso";
import Pessoa from "./Pessoa";
class Professor extends Pessoa{
    private numero_registro: number;
    private cursos: Curso[];

    constructor(numero_registro: number){
        super()
        this.numero_registro = numero_registro;
        this.cursos = [];
    }

    cadastrarProfessor(){
        console.log(`Professor: ${this.getNome}`);
        console.log(`ID: ${this.getId}`);
        console.log(`Genero: ${this.getGenero}`);
        console.log(`CPF: ${this.getCPF}`);
        console.log(`Data de Nascimento: ${this.getNome}`);
        console.log(`E-mail: ${this.getEmail}`);
        console.log(`Endereco: ${this.getEndereco}`);
    }

    excluirProfessor(){
        console.log(`Professor: ${this.getNome} foi excluido`);
    }

}
export default Professor;