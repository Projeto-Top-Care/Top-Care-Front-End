import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function HeaderLogado() {
    return(
        <div className="bg-primaria px-20 py-3 flex flex-row font-poppins justify-between items-center text-preto">
        <div className='w-[25%]'>
            <img className="w-[25%]" src="assets/logo.png"/>
        </div>

        <div className="flex flex-row w-[50%] justify-between">
            <a className="hover:underline text-sm" href="#">Produtos</a>
            <a className="hover:underline text-sm" href="#">Serviços</a>
            <a className="hover:underline text-sm" href="#">Lojas</a>
            <a className="hover:underline text-sm" href="#">Pets</a>
            <a className="hover:underline text-sm" href="#">Planos</a>
            <a className="hover:underline text-sm" href="#">Ajuda</a>
        </div>


        <div className='flex flex-row gap-6 w-[25%] justify-end'>
            <FiShoppingBag style={{ color: "#322828",}} />
            <FaRegHeart style={{color: "#32282"}} />
            <FaUserCircle style={{color: "#32282"}} />
        </div>
    </div>
    )
}