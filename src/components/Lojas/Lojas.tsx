import { radio } from "@material-tailwind/react";
import { LuMapPin } from "react-icons/lu";

interface ILoja{
    src: string,
    cidade: string,
    estado: string,
    endereco: string,
    contato: string,
    funcionamentoDias: string,
    funcionamentoHora: string
}

const Lojas = ({src, cidade, estado, endereco, contato, funcionamentoDias, funcionamentoHora}:ILoja) => {
    return (
        <div className="font-poppins flex flex-col items-center lg:w-[21%] md:w-[28%] sm:w-[40%] w-[75%] ">
            <img className=" rounded-t-lg w-full" src={src} />
            <div className="flex justify-center border border-preto border-t-0 rounded-b-lg w-full">
                <div className="mt-[5%] w-20px h-20px md:mr-3 mr-1">
                    <LuMapPin size={25} color="#B5A6F3"/>
                </div>
                <div className="mt-[5%] mb-[10%] w-[78%]">
                    <p className=" text-preto md:text-lg text-sm">Top Care {cidade} - {estado}</p>
                    <div className="text-cinza-escuro md:bg-red">
                        <p className="mt-[10%] font-bold md:text-base text-sm">Endereço</p>
                        <p className="md:text-sm text-xs">{endereco}</p> 
                        <p className="mt-[10%] font-bold md:text-base text-sm">Contato</p>
                        <p className="md:text-sm text-xs">{contato}</p>
                        <p className="mt-[10%] font-bold md:text-base text-sm">Funcionamento</p>
                        <p className="md:text-sm text-xs">{funcionamentoDias}</p>    
                        <p className="md:text-sm text-xs">{funcionamentoHora}</p>  
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Lojas;