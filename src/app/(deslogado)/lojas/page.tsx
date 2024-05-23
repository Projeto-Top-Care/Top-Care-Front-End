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
<<<<<<< HEAD:src/app/(deslogado)/lojas/page.tsx
            <section className="flex flex-col gap-12">
                <section className="flex flex-col md:gap-0 gap-8 md:flex-row md:justify-center md:space-x-16 md:space-y-0 space-y-4 items-center ">
                    <Lojas src='./assets/lojaGramado.png/' cidade="Gramado" estado="RS" endereco="Av. das Hortênsias, 680 - Planalto, Gramado - RS, 95675-072"
                        contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                    <Lojas src='./assets/lojaCuritiba.png/' cidade="Curitiba" estado="PR" endereco="R. Cel. Zacarias, 51 - Sala 4 -Prado Velho, Curitiba - PR, 80215-190"
                        contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                    <Lojas src='./assets/lojaJoinville.png/' cidade="Joinville" estado="SC" endereco="Av. Getúlio Vargas, 328 - Anita Garibaldi, Joinville - SC, 89202-000"
                        contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                </section>

                <section className="flex flex-col md:flex-row md:gap-0 gap-8 md:justify-center md:space-x-16 md:space-y-0 space-y-4 items-center md:mt-16 mb-24">
                    <Lojas src='./assets/lojaCorupa.png/' cidade="Corupá" estado="SC" endereco="R. Roberto Seidel, 732 - Sala 2 - João Tozini, Corupá - SC, 89278-000"
                        contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                    <Lojas src='./assets/lojaBalneario.png/' cidade="Balneário" estado="SC" endereco="R. 1800, 186 - Sala 39 - Centro, Balneário Camboriú - SC, 88330-508"
                        contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                    <Lojas src='./assets/lojaJaragua.png/' cidade="Jaraguá" estado="SC" endereco="R. Guilherme Weege, 202 - Centro, Jaraguá do Sul - SC, 89251-610"
                        contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                </section>
=======
            <section className="grid xl:grid-cols-3 md:grid-cols-2 justify-items-center m-auto  gap-y-16 w-[85%] mb-24">
                <Lojas src='./assets/lojaGramado.png/' cidade="Gramado" estado="RS" endereco="Av. das Hortênsias, 680 - Planalto, Gramado - RS, 95675-072"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaCuritiba.png/' cidade="Curitiba" estado="PR" endereco="R. Cel. Zacarias, 51 - Sala 4 -Prado Velho, Curitiba - PR, 80215-190"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaJoinville.png/' cidade="Joinville" estado="SC" endereco="Av. Getúlio Vargas, 328 - Anita Garibaldi, Joinville - SC, 89202-000"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaCorupa.png/' cidade="Corupá" estado="SC" endereco="R. Roberto Seidel, 732 - Sala 2 - João Tozini, Corupá - SC, 89278-000"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaBalneario.png/' cidade="Balneário" estado="SC" endereco="R. 1800, 186 - Sala 39 - Centro, Balneário Camboriú - SC, 88330-508"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
                <Lojas src='./assets/lojaJaragua.png/' cidade="Jaraguá" estado="SC" endereco="R. Guilherme Weege, 202 - Centro, Jaraguá do Sul - SC, 89251-610"
                    contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h" />
>>>>>>> Feature/Pagina-Lojas:src/app/lojas/page.tsx
            </section>
        </main>
    )
}

