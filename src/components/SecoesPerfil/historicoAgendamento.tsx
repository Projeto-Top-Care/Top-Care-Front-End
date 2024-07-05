import { SetStateAction, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface iAgendamentos {
    historicoAgendamentos: React.JSX.Element[],
    setShowAllSchedulles: React.Dispatch<SetStateAction<boolean>>
}

export default function HistoricoAgendamentos({ historicoAgendamentos, setShowAllSchedulles }: iAgendamentos) {

    const [showSchedulles, setShowSchedulles] = useState(false)

    useEffect(() => {
        setShowAllSchedulles(showSchedulles)
    }, [showSchedulles])

    return (
        <main>
            <div className="flex flex-col">
                <div className="grid md:mb-12 mb-4 md:w-[90%] w-full lg:pl-16 md:p-0 p-4 lg:self-start self-center gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {
                        historicoAgendamentos.map((item, i) => (
                            <div key={i}>{item}</div>
                        ))
                    }
                </div>
                <div className="w-full md:w-[90%] gap-8 lg:pl-16 md:p-0 p-4 lg:self-start self-center">
                    <button className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-44 w-full h-8 hover:bg-[#9EBF40] max-sm:gap-2 justify-center sm:justify-around items-center' onClick={() => setShowSchedulles(!showSchedulles)}>
                        {showSchedulles ? "Mostrar menos" : "Mostrar todos "}
                        {showSchedulles ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                    </button>
                </div>
            </div>
        </main>
    )
}