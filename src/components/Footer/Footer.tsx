import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-secundaria font-poppins font-light">
            <div className="md:px-20 px-5 md:py-8 py-4 justify-between grid md:grid-cols-5 grid-cols-3 md:gap-9 gap-3.5 items-start text-lg md:w-[100%]">
                <div className="md:w-[5rem] w-[4rem] col-start-1 col-span-3 md:col-span-1 flex items-center">
                    <img className="" src="../assets/logo.png" />
                </div>
                <div className="flex flex-col gap-1 text-xs md:text-base">
                    <h5>Empresa</h5>
                    <a className="underline text-cinza-escuro md:text-sm text-[10px]">Sobre nós</a>
                    <a className="underline text-cinza-escuro md:text-sm text-[10px]">Perguntas frequentes</a>
                </div>

                <div className="flex flex-col gap-1 text-xs md:text-base">
                    <h5>Fale conosco</h5>
                    <a className="underline text-cinza-escuro md:text-sm text-[10px]">Email</a>
                    <a className="underline text-cinza-escuro md:text-sm text-[10px]">Telefone/ SMS</a>
                </div>

                <div className="flex flex-col items-center">
                    <h5 className="md:text-base text-xs">Nossas redes sociais</h5>
                    <div className="flex justify-center gap-2 pt-2 w-full md:w-[80%]">
                        <FaInstagram style={{ color: "#322828", fontSize: "1.4rem" }} />
                        <FaFacebookSquare style={{ color: "#322828", fontSize: "1.4rem" }} />
                        <FaYoutube style={{ color: "#322828", fontSize: "1.4rem" }} />
                        <BsTwitterX style={{ color: "#322828", fontSize: "1.4rem" }} />
                    </div>
                </div>



                <div className="flex flex-col">
                    <h5 className="md:text-base text-xs mb-[2%]">Métodos de pagamento</h5>
                    <img className="md:w-[190px]" src="assets/footer-pagamento.png" />
                </div>
            </div>

            <div className="flex flex-row justify-between text-cinza-escuro py-2 px-4 text-[10px] border-t border-cinza-escuro">
                <p>Copright 2023 © Todos os direitos reservados a Top Care Pet Shop</p>
                <p className="md:flex hidden">Compra segura - A TopCare garante segurança para suas informações pessoais e financeiras</p>
            </div>
        </div>
    )
}
export default Footer;