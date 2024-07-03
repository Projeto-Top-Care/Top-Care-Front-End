interface IPerfilFoto {
    src: string,
    nome: string,
}

const PerfilFoto = ({ src, nome }: IPerfilFoto) => {
    return (
        <div className="font-poppins flex text-preto flex-row gap-4 sm:gap-8 items-center">
            <img className="rounded-full md:h-32 md:w-32 w-20 h-20" src={src} />
            <div className="">
                <p className="sm:text-xl text-md">Olá, {nome}</p>
                <p className="md:text-lg text-sm text-cinza-escuro">Plano grátis</p>
            </div>
        </div>
    )
}
export default PerfilFoto;