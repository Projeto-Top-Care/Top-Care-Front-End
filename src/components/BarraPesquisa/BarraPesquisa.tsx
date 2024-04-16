import { FaSearch } from "react-icons/fa";

interface IBarraPesquisa {
    placeholder: string,
}

export default function BarraPesquisa({placeholder}: IBarraPesquisa){
    return(
        <div className="border border-cinza w-[30%] flex rounded-lg h-8">
            <div className="w-[10%] flex items-center justify-center">
                <button><FaSearch style={{color: "#322828"}}/></button>
            </div>
            <div className="w-[90%] flex">
                <input type="text" className="focus:outline-0 w-full rounded placeholder:text-cinza-escuro font-poppins" placeholder={placeholder}/>
            </div>
        </div>
    )
}