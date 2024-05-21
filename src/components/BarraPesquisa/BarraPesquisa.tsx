import { getLocalStorageArray } from "@/server/localStorage/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosClose  } from "react-icons/io";
import { TbReload } from "react-icons/tb";

interface IBarraPesquisa {
    placeholder: string,
}

export default function BarraPesquisa({ placeholder }: IBarraPesquisa) {
    const router = useRouter()
    const [query, setQuery] = useState<string>('')
    const [ultimasPesquisas, setUltimasPesquisas] = useState<string[]>(getLocalStorageArray('ultimasPesquisas'))

    const pesquisas = (): string[] =>{
        const ultimasPesquisasTemp = [...ultimasPesquisas]
        let ultimasPesquisas3 = new Array().fill(null);
        if(ultimasPesquisasTemp.length > 3){
           ultimasPesquisasTemp.forEach((pesquisa, i)=>{
            (i < 4 ? ultimasPesquisas3[i] = pesquisa : '')
           })
           return ultimasPesquisas3;
        }
        return ultimasPesquisasTemp
    }

    const excluirItem = (excluido: string) =>{
        const newPesquisas = pesquisas().filter((pesquisa)=>{
            return pesquisa != excluido
        })
        setUltimasPesquisas(newPesquisas)
    }

    useEffect(()=>{
        localStorage.setItem('ultimasPesquisas', JSON.stringify(pesquisas()))
    }, [ultimasPesquisas])

    const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            if (query != '') {
                document.getElementById('search')?.blur()
                setUltimasPesquisas([query, ...ultimasPesquisas])
                router.push('/produtos?q=' + query)
            }
        }
    }
    const enviarQuery = () => {
        if (query != '') {
            router.push('/produtos?q=' + query)
        }
    }
    const enviarPesquisa = (pesquisa: string) =>{
        router.push('/produtos?q=' + pesquisa)
    }
    return (
        <div className="relative bg-branco flex items-center w-full rounded-lg h-8">
            <div className="size-[2rem] flex items-center justify-center">
                <button><FaSearch style={{ color: "#322828" }} onClick={() => enviarQuery()} /></button>
            </div>
            <div className="w-full peer flex flex-col items-center justify-start">
                <input type="text" id="search" className="peer text-sm sm:text-base focus:outline-0 w-full rounded placeholder:text-cinza-escuro font-poppins bg-branco" 
                placeholder={placeholder} 
                onChange={(e) => setQuery(e.target.value)} 
                onKeyDown={(e) => enter(e)}
                />
                <div className="peer-focus:!flex hover:!flex flex-col max-h-40 hidden border border-cinza bg-branco top-0 left-0 w-full absolute z-50 mt-9 rounded-lg">
                    {pesquisas().map((pesquisa, i)=>(
                        <div key={i} className="font-poppins flex flex-row h-10 items-center hover:bg-gray-200" >
                            <div className="w-[96%] flex flex-row cursor-pointer items-center" onClick={()=>enviarPesquisa(pesquisa)}>
                                <div className="size-[2rem] flex items-center justify-center">
                                    <TbReload />
                                </div>
                                <p>{pesquisa}</p>
                            </div>
                            <button onClick={()=>excluirItem(pesquisa)}><IoIosClose size={25}/></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}