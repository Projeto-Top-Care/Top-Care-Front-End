import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-secundaria font-poppins font-light">
            <div className="px-[70px] py-[30px] justify-between grid md:grid-cols-5 grid-cols-4 gap-9 items-start text-lg">
                <div className="md:w-[5rem] w-[4rem]">
                    <img className="" src="./assets/logo.png" />
                </div>

                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <h5>Empresa</h5>
                    <a className="underline text-cinza-escuro md:text-sm text-xs">Sobre nós</a>
                    <a className="underline text-cinza-escuro md:text-sm text-xs">Perguntas frequentes</a>
                </div>

                <div className="flex flex-col gap-1 text-sm md:text-base">
                    <h5>Fale conosco</h5>
                    <a className="underline text-cinza-escuro md:text-sm text-xs">Email</a>
                    <a className="underline text-cinza-escuro md:text-sm text-xs">Telefone/ SMS</a>
                </div>

                <div className="flex flex-col items-center">
                    <h5 className="md:text-base text-sm">Nossas redes sociais</h5>
                    <div className="flex flex-row gap-2 pt-2 ">
                        <FaInstagram style={ { color: "#322828", fontSize: "1.4rem" }}/>
                        <FaFacebookSquare style={ { color: "#322828", fontSize: "1.4rem" }}/>
                        <FaYoutube style={ { color: "#322828", fontSize: "1.4rem" }}/>
                        <BsTwitterX style={ { color: "#322828", fontSize: "1.4rem" }}/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h5 className="md:text-base text-sm">Métodos de pagamento</h5>
                    <img className="md:w-[190px]" src="assets/footer-pagamento.png" />
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