import { FaAngleDown } from "react-icons/fa6";

const Pergunta = () => {
    return (
        <div className="font-poppins bg-terciaria rounded-lg">
            <div className="w-[100%] h-[15%] p-4 flex items-center gap-4">
                <p className="text-xl font-semibold">Posso cancelar meu pedido após a compra?</p>
                <button className="text-2xl flex justify-center"><FaAngleDown /></button>
            </div>
        </div>
    )
}
export default Pergunta;