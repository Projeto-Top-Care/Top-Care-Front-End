import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"

export default function pagamentoBoleto() {
    return (
        <main>
            <section className="p-4">
                <ResumoPedido />
            </section>
        </main>
    )
}