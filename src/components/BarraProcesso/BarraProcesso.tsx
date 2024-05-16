interface IBarraProcesso {
    primeiroPasso: string,
    segundoPasso: string,
    terceiroPasso: string,
    quartoPasso: string,
    quintoPasso: string
}

const BarraProcesso = ({ primeiroPasso, segundoPasso, terceiroPasso, quartoPasso, quintoPasso }: IBarraProcesso) => {

    return (
        <div className="w-full relative flex flex-col items-center">
            <div className="w-[78%] mt-3.5 absolute m-auto">
                <div className="border-t-2 border-cinza w-full absolute -z-50"></div>
                <div className="border-t-2 border-secundaria w-[50%] absolute -z-10"></div>
            </div>
            <div className="flex flex-row w-[78%] justify-between">
                <div className="w-8 h-8 rounded-full bg-secundaria"></div>
                <div className="w-8 h-8 rounded-full bg-secundaria"></div>
                <div className="w-8 h-8 rounded-full bg-secundaria"></div>
                <div className="w-8 h-8 rounded-full bg-secundaria"></div>
                <div className="w-8 h-8 rounded-full bg-secundaria"></div>
            </div>
            <div className="flex flex-row justify-between w-[80%] items-center font-poppins text-preto md:text-base text-xs">
                <p>{primeiroPasso}</p>
                <p>{segundoPasso}</p>
                <p>{terceiroPasso}</p>
                <p>{quartoPasso}</p>
                <p>{quintoPasso}</p>
            </div>
        </div>
    )
}

export default BarraProcesso;
