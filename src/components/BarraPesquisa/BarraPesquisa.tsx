import { FaSearch } from "react-icons/fa";

interface IBarraPesquisa {
    placeholder: string,
}

export default function BarraPesquisa({placeholder}: IBarraPesquisa){
    return(
        <div className="border-[0.1rem] border-cinza bg-branco flex w-full rounded-lg h-8">
            <div className="size-[2rem] flex items-center justify-center">
                <button><FaSearch style={{color: "#322828"}}/></button>
            </div>
            <div className="w-full flex items-center justify-start">
                <input type="text" className="focus:outline-0 w-full rounded placeholder:text-cinza-escuro font-poppins" placeholder={placeholder}/>
            </div>
        </div>
    )
}