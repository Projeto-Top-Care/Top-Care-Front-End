interface IPlano{
    titulo: string,
    descricao: string,
    textoBotao: string
}

const Servicos = ({titulo, descricao, textoBotao}:IPlano) => {
    return (
        <div className="flex p-8 rounded-lg font-poppins bg-terciaria w-[75%]">
            <div className="flex-auto w-[40%]">
                <p className="mb-[5%] text-2xl font-bold">{titulo}</p>
                <p className="break-normal mr-[8%]">{descricao}</p>
                <button className="bg-primaria w-[30%] rounded-lg p-[1%] mt-[5%]">{textoBotao}</button>
            </div>
                <img src="./assets/cachorro_serviços.png" className="w-[41%]"/>
        </div>
    )
}

export default Servicos;