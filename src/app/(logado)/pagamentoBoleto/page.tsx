import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"

export default function pagamentoBoleto() {

    const produtos = ["Kit para banho Sanol Cachorros e Gatos", "Pote para ração em formato de pata de cachorro", "Coleira com pingente tamanho M unissex para cães e gatos"]
    const quantidades = [1, 1, 1]
    const precos = [11.1, 11.1, 11.1]

    return (
        <main>
            <section className="p-4">
                <ResumoPedido produtos={produtos} quantidades={quantidades} precos={precos} desconto={9} frete={0} />
            </section>
        </main>
    )
}