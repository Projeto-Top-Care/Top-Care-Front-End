interface IEndereco {
    titulo: string,
    cep: string,
    estado: string,
    bairro: string,
    rua: string,
    numero: number,
    complemento: string
    cidade: string
}

const EnderecoPerfil = ({ titulo, cep, estado, bairro, rua, numero, complemento, cidade }: IEndereco) => {

    return (
        <div className="font-poppins flex flex-col justify-center gap-2 border-cinza border rounded-md p-5 h-38 ">
            <div className="flex flex-col gap-1">
                <p className="text-preto font-bold text-md sm:text-lg">{titulo}</p>
                <p className="text-cinza-escuro text-base font-medium">CEP {cep}</p>
            </div>
            <div>
                <p className="text-cinza-escuro text-sm">Rua {rua}, {numero} - {complemento} - {bairro} | {cidade} - {estado}</p>
            </div>
        </div>
    )
}

export default EnderecoPerfil;