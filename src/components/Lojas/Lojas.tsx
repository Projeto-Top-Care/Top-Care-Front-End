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
        <div className="font-poppins flex flex-col items-center w-[22%]">
            <img className="rounded-t-lg" src={src} />
            <div className="flex justify-center border border-preto rounded-b-lg">
                <div className="mt-[5%]">
                    <LuMapPin size={25} color="#B5A6F3"/>
                </div>
                <div className="mt-[5%] mb-[10%] w-[74%]">
                    <p className="text-lg text-preto">Top Care {cidade} - {estado}</p>
                    <div className="text-cinza-escuro">
                        <p className="mt-[10%] font-bold ">Endereço</p>
                        <p className="text-sm">{endereco}</p> 
                        <p className="mt-[10%] font-bold">Contato</p>
                        <p className="text-sm">{contato}</p>
                        <p className="mt-[10%] font-bold">Funcionamento</p>
                        <p className="text-sm">{funcionamentoDias}</p>    
                        <p className="text-sm">{funcionamentoHora}</p>  
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Lojas;