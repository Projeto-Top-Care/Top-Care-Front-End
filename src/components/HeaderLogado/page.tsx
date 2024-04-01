import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser,} from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faHeart} size="sm" style={{color: "#322828",}} className="w-6"/>   
            <FontAwesomeIcon icon={faBagShopping} size="sm" style={{color: "#322828",}}  className="w-6"/>        
            <FontAwesomeIcon icon={faUser} size="sm"  style={{color: "#322828",}} className="w-6"/>     
        </div>
    </div>
    )
}