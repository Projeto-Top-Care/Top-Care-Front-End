import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";

export default function HeaderLogado() {
    return(
        <div>
            <div className="bg-primaria px-20 py-3 flex flex-row font-poppins justify-between items-center text-preto">
                <div className=''>
                        <img className="md:w-[64px] w-[40px]" src="assets/logo.png"/>
                </div>

                <div>
                    <BarraPesquisa placeholder="O que você precisa hoje?" />
                </div>
                
                <div className='flex flex-row gap-6 w-[25%] justify-end'>
                    <button><FiShoppingBag size={'1.2rem'} style={{ color: "#322828"}} /></button>
                    <button><FaRegHeart size={'1.3rem'} style={{color: "#32282"}} /></button>
                    <button><FaUserCircle size={'1.8rem'} style={{color: "#32282"}} /></button>
                </div>
            </div> 
            <div className="bg-terciaria flex flex-row justify-center">
                
                <div className="font-poppins flex flex-row justify-between md:gap-12 gap-2 py-3">
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Produtos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Serviços</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Lojas</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Pets</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Planos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Ajuda</a>
                </div>

            </div>
        </div>
    )
}