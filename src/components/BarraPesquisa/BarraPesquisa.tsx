import { FaSearch } from "react-icons/fa";

interface IBarraPesquisa {
    placeholder: string,
}

export default function BarraPesquisa({placeholder}: IBarraPesquisa){
    return(
        <div className="border border-black w-[30%] flex rounded h-8">
            <div className="w-[10%] flex items-center justify-center">
                <button><FaSearch /></button>
            </div>
            <div className="w-[90%] flex">
                <input type="text" className="focus:outline-0 w-full rounded placeholder:text-preto font-poppins" placeholder={placeholder}/>
            </div>
        </div>
    )
}