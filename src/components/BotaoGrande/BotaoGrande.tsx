interface IBotaoGrande{
    title: string,
    background: string,
    type: 'submit' | 'button',
}

const BotaoGrande = ({title, background, type} : IBotaoGrande) => {
    return(
        <button type={type} className={`w-full h-8 px-2 text-preto text-sm font-poppins lg:text-base font-regular ${background} rounded-lg ${background == 'bg-primaria'? 'hover:bg-indigo-200' : (background == 'bg-secundaria' ? 'hover:bg-[#BACDB0]': 'hover:bg-sky-200')} transition duration-500`}>
            {title}
        </button>
    )
} 
export default BotaoGrande;