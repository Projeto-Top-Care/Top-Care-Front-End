import Lojas from "@/components/Lojas/Lojas";

export default function Loja() {
    return (
        <main className="bg-branco ">
            <section className="flex justify-center">
                <p className="font-averia font-bold text-3xl text-preto mt-12 mb-5">Lojas</p>
            </section>
            <section className="flex justify-center">
                <p className="font-poppins text-lg text-preto mb-12 mx-[3%] text-center">São várias lojas espalhadas pelo Sul do Brasil, ache a mais perto de você!</p>
            </section>
            <section className="grid xl:grid-cols-3 md:grid-cols-2 justify-items-center m-auto  gap-y-16 w-[85%] mb-24">
                <Lojas src='./assets/lojaGramado.png/' cidade="Gramado" estado="RS" endereco="Av. das Hortênsias, 680 - Planalto, Gramado - RS, 95675-072"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaCuritiba.png/' cidade="Curitiba" estado="PR" endereco="R. Cel. Zacarias, 51 - Sala 4 -Prado Velho, Curitiba - PR, 80215-190"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaJoinville.png/' cidade="Joinville" estado="SC" endereco="Av. Getúlio Vargas, 328 - Anita Garibaldi, Joinville - SC, 89202-000"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
            </section>
        </main>
    )
}