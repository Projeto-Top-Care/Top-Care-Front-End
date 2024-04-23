import ServicosApresentacao from "../ServicosApresentacao/ServicosApresentacao";

const ServicosApresentacaoCard = () => {
    return (
        <div className="md:flex rounded-lg font-poppins bg-terciaria w-[75%] pt-4 pb-7 w-[88%]">
            <div className="pl-7">
                <ServicosApresentacao titulo={"Banhos"} descricao={"Banhos que garantem aquele cheirinho bom no seu pet."} />
                <ServicosApresentacao titulo={"Consultas"} descricao={"Os melhores profissionais pronto para te atender da melhor maneira."} />
                <ServicosApresentacao titulo={"Passeios"} descricao={"Se sua semana foi cansativa, mas seu pet ainda tem energia, deixa que a gente passeia!"} />
                <ServicosApresentacao titulo={"Vacinas"} descricao={"A gente sabe que não dá pra deixar de fora, então deixa conosco!"} />
            </div>
            <div className="md:pl-10 pl-7 md:pr-16">
                <ServicosApresentacao titulo={"Tosa"} descricao={"Aquela aparada especial que dá o “tcham” no pelo!"} />
                <ServicosApresentacao titulo={"Hospedagem"} descricao={"Vai viajar? Nós cuidamos do seu pet para você aproveitar o passeio!"} />
                <ServicosApresentacao titulo={"Adestramentos"} descricao={"Técnicas modernas e eficientes para tornar seu bichino educado."} />
                <ServicosApresentacao titulo={"Exames"} descricao={"Não esqueça de ver a saúde do seu pet. Agende um horário para exames."} />
            </div>
        </div>
    )
}

export default ServicosApresentacaoCard;