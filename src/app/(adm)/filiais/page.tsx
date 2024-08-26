'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import Lojas from "@/components/Lojas/Lojas";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface InterfaceFiliais {
    searchParams?: { q: string }
}

export default function Filiais({ searchParams }: InterfaceFiliais) {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const router = useRouter()

    return (
        <section>
            <section>
                <TituloLinha titulo="Filiais" voltar={true}></TituloLinha>
            </section>
            <section className="flex flex-wrap justify-end">
                <div className='sm:w-[30%] md:w-[40%] md:mr-12 lg:w-[20%] mb-8 p-4'>
                    <BotaoGrande title='Adicionar nova filial' type='button' background='secundaria' size='h-9' onClick={() => router.push('/cadastrarFilial')} />
                </div>
            </section>
            <section className="grid xl:grid-cols-3 md:grid-cols-2 justify-items-center m-auto gap-y-16 w-[85%] mb-24">
                <Lojas src='./assets/lojaGramado.png/' cidade="Gramado" estado="RS" endereco="Av. das Hortênsias, 680 - Planalto, Gramado - RS, 95675-072"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaCuritiba.png/' cidade="Curitiba" estado="PR" endereco="R. Cel. Zacarias, 51 - Sala 4 -Prado Velho, Curitiba - PR, 80215-190"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaJoinville.png/' cidade="Joinville" estado="SC" endereco="Av. Getúlio Vargas, 328 - Anita Garibaldi, Joinville - SC, 89202-000"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
            </section>
        </section>
    );
}
