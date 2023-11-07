class Curso {
    private codigo_curso: number;
    private nomeCurso: string;
    private carga_horaria: number;
    
    constructor(codigo_curso: number, nomeCurso: string , carga_horaria:number){
        this.codigo_curso = codigo_curso;
        this.nomeCurso = nomeCurso;
        this.carga_horaria = carga_horaria;

    }

    getCodigoCurso(){
        return this.codigo_curso;
    }

    setCodigoCurso(){
        return this.codigo_curso;
    }

    getNomeCurso(){
        return this.nomeCurso;
    }

    setNomeCurso(){
        return this.nomeCurso;
    }

    getCargaHoraria(){
        return this.carga_horaria;
    }

    setCargaHoraria(){
        return this.carga_horaria;
    }


   /* public get codigo_curso(): number {
        return this._codigo_curso;
    }
    public set codigo_curso(value: number) {
        this._codigo_curso = value;
    }



    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }



    public get carga_horaria(): number {
        return this._carga_horaria;
    }
    public set carga_horaria(value: number) {
        this._carga_horaria = value;
    }*/

}

export default Curso;