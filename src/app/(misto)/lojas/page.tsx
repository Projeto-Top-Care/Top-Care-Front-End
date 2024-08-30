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
            <section className="grid xl:grid-cols-3 md:grid-cols-2 justify-items-center m-auto gap-y-16 w-[85%] mb-24">
                <Lojas src='./assets/lojaGramado.png/' nome="Top Care Gramado - RS" cidade="Gramado" estado="RS" numero={680} rua="Av. das Hortênsias" bairro="Planalto" cep="95675-072"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaCuritiba.png/' nome="Top Care Curitiba - PR" cidade="Curitiba" estado="PR" numero={51} rua="R. Cel. Zacarias" bairro="Prado Velho" cep="80215-190" 
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaJoinville.png/' nome="Top Care Jaraguá do Sul - SC" cidade="Jaraguá do Sul" estado="SC" numero={202} rua="R. Guilherme Weege" bairro="Centro" cep="89202-000" 
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
            </section>
        </main>
    )
}