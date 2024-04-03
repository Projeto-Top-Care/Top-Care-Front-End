interface IBotaoPequeno {
    texto: string,
}
export default function BotaoPequeno({texto}: IBotaoPequeno){
    return(
        <button className="bg-secundaria font-poppins w-[12%] h-8 rounded-lg hover:bg-verde-hover duration-700">
            {texto}
        </button> 
    )
}