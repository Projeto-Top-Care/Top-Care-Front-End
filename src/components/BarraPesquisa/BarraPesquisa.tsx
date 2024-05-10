import { buscarTodos } from "@/server/produtos/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface IBarraPesquisa {
    placeholder: string,
}

export default function BarraPesquisa({ placeholder }: IBarraPesquisa) {
    const router = useRouter()
    const [query, setQuery] = useState<string>('')

    const pesquisas = () =>{
        
    }

    const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            if (query != '') {
                router.push('/produtos?q=' + query)
            }
        }
    }
    const enviarQuery = () => {
        if (query != '') {
            router.push('/produtos?q=' + query)
        }
    }
    return (
        <div className="relative bg-branco flex items-center w-full rounded-lg h-8">
            <div className="size-[2rem] flex items-center justify-center">
                <button><FaSearch style={{ color: "#322828" }} onClick={() => enviarQuery()} /></button>
            </div>
            <div className="w-full peer flex flex-col items-center justify-start">
                <input type="text" id="search" className="peer focus:outline-0 w-full rounded placeholder:text-cinza-escuro font-poppins bg-branco" placeholder={placeholder} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => enter(e)} />
                <div className="peer-focus:!flex hidden h-16 border border-cinza bg-branco top-0 left-0 w-full absolute z-50 mt-9 rounded-lg">
                    a
                </div>
            </div>
        </div>
    )
}