import  Pessoa from "./Pessoa";
import Curso from "./Curso";
import Professor from "./Professor";
class Aluno extends Pessoa {
    private numero_matricula: string;
    
    private cursos_matriculados: Curso[];
    //private curso_matriculados: object;

    constructor(numero_matricula: string) {
        super();
        this.numero_matricula = numero_matricula;
        this.cursos_matriculados = [];
    }

    cadastrarAluno(){
        console.log(`Aluno: ${this.getNome}`);
        console.log(`ID: ${this.getId}`);
        console.log(`Genero: ${this.getGenero}`);
        console.log(`CPF: ${this.getCPF}`);
        console.log(`Data de Nascimento: ${this.getNome}`);
        console.log(`E-mail: ${this.getEmail}`);
        console.log(`Endereco: ${this.getEndereco}`);
    }
    excluirAluno(){
        console.log(`Aluno: ${this.getNome} foi excluido`);
    }

    matricularAluno(){
        console.log(`Aluno: ${this.getNome} foi matriculado`);
    }

    desistirAluno(){
        console.log(`Aluno: ${this.getNome} desistiu `);
    }
    // terminar aqui
    /*verificarCursosMatriculados(){
        console.log(`Os curso são: ${this.getNome}`)
    }
    */

    getNumeroMatricula(){
        return this.numero_matricula;
    }
}