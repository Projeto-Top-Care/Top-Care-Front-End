import { FaSearch } from "react-icons/fa";

interface IBarraPesquisa {
    placeholder: string,
}

export default function BarraPesquisa({placeholder}: IBarraPesquisa){
    return(
        <div className=" bg-branco flex w-full rounded-lg h-8">
            <div className="size-[2rem] flex items-center justify-center">
                <button><FaSearch style={{color: "#322828"}}/></button>
            </div>
            <div className="w-full flex items-center justify-start">
                <input type="text" className="focus:outline-0 w-full text-xs sm:text-base rounded placeholder:text-cinza-escuro font-poppins bg-branco" placeholder={placeholder}/>
            </div>
        </div>
    )
}