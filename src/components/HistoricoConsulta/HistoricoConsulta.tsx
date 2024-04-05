interface IHistoricoConsulta{
    titulo:string,

    data: string,
    horario: string,
    pet: string,
    valor: string,
    forma: string,
    profissional: string

    dataM: string,
    horarioM: string,
    petM: string,
    valorM: number,
    formaM: string,
    profissionalM: string
}   

const HistoricoConsulta = ({titulo,data,horario,pet,valor,forma,profissional,dataM,horarioM,petM,valorM,formaM,profissionalM}:IHistoricoConsulta) => {
    return (
        <div className="font-poppins bg-branco shadow-lg rounded-lg">
            <p className="text-2xl font-bold bg-secundaria text-center p-2 rounded-t-lg">{titulo}</p>
            <div className="flex flex-row justify-around p-3">
                <div className="font-bold mr-10">
                    <p className="mb-5">{data}</p>
                    <p className="mb-5">{horario}</p>
                    <p className="mb-5">{pet}</p>
                    <p className="mb-5">{valor}</p>
                    <p className="mb-5">{forma}</p>
                    <p className="">{profissional}</p>
                </div> 
                <div className="text-right">
                    <p className="mb-5">{dataM}</p>
                    <p className="mb-5">{horarioM}</p>
                    <p className="mb-5">{petM}</p>
                    <p className="mb-5">R${valorM}</p>
                    <p className="mb-5">{formaM}</p>
                    <p className="">{profissionalM}</p>
                </div> 
            </div>
        </div>
    )
}
export default HistoricoConsulta;