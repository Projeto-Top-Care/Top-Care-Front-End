interface IInfosPerfil{
    src: string,
    nome: string,
}

const InfosPerfil = ({src, nome}:IInfosPerfil) => {
    return (
        <div className="font-poppins flex text-preto ">
            <img className="rounded-full md:h-32 md:w-32 w-20 h-20" src={src}/>
            <a className="h-7 md:mt-12 mt-6 md:text-2xl text-xl ml-6">Olá, {nome}</a>
        </div>
    )
}
export default InfosPerfil;