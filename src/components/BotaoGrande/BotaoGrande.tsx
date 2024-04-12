interface IBotaoGrande{
    title: string,
    background: string,
}

const BotaoGrande = ({title, background} : IBotaoGrande) => {
    return(
        <button className={`w-full h-8 px-2 text-preto font-poppins text-base font-regular ${background} rounded-lg hover:bg-blue-200 transition duration-500`}>
            {title}
        </button>
    )
} 
export default BotaoGrande;