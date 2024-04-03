const Footer = () => {
    return (
        <div className="bg-secundaria font-poppins font-light">
            <div className="px-[70px] py-[30px] flex flex-row justify-between items-start text-lg">
                <div className="pr-8">
                    <img className="h-[30%]" src="./assets/logo.png" />
                </div>

                <div className="flex flex-col gap-1 text-base">
                    <h5>Empresa</h5>
                    <a className="underline text-cinza-escuro text-sm">Sobre nós</a>
                    <a className="underline text-cinza-escuro text-sm">Perguntas frequentes</a>
                </div>

                <div className="flex flex-col gap-1 text-base">
                    <h5>Fale conosco</h5>
                    <a className="underline text-cinza-escuro text-sm">Email</a>
                    <a className="underline text-cinza-escuro text-sm">Telefone/ SMS</a>
                </div>

                <div>
                    <h5 className="text-base">Nossas redes sociais</h5>
                    <div className="flex flex-row gap-3 pt-[20px] justify-center">
                        
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h5 className="text-base">Métodos de pagamento</h5>
                    <img className="w-[190px]" src="assets/footer-pagamento.png" />
                </div>
            </div>

            <div className="flex flex-row justify-between text-cinza-escuro py-2 px-4 text-[10px] border-t border-cinza-escuro">
                <p>Copright 2023 © Todos os direitos reservados a Top Care Pet Shop</p>
                <p>Compra segura - A TopCare garante segurança para suas informações pessoais e financeiras</p>
            </div>

        </div>
    )
}
export default Footer;