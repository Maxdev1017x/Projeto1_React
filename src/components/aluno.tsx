
interface AlunoProps {
    Nome: string;
    Idade: number
}

export function Aluno({Nome, Idade}: AlunoProps) {
    return(
        <div>
        <h1>Aluno: {Nome}</h1>
        <h3>Idade: {Idade}</h3>
        </div>
    )
}
