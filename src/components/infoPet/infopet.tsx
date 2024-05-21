interface IInfoPet{
    cor: string;
    titulo: string;
    descrição: string;

}

const InfoPet = ({cor,titulo,descrição}: IInfoPet) => {
    const corFundo = `font-poppins font-medium text-sm sm:text-lg h-32 flex justify-center py-3 rounded-t-md ${cor == "primaria" ? "bg-primaria" : "bg-secundaria"}`
    return (
        <div className= "text-preto w-full h-24 shadow-xl text-center font-poppins flex justify-center flex-col ">
            <p className={corFundo}>{titulo}</p>
            <p className="bg-amber-50 h-20 align-middle text-sm sm:text-lg flex justify-center font-semibold py-4 rounded-b-md">{descrição}</p>
        </div>
    )
}

export default InfoPet;