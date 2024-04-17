import TituloLinha from "@/components/TituloLinha/TituloLinha"


export default function sobreNos() {
    return (
        <main className="bg-branco w-full">
            <section className="flex w-full">
                <div className="md:p-10 p-4 w-full h-[100%] bg-terciaria flex justify-center items-center content-center ">
                    <div className="md:w-[57%] md:my-4 w-[80%]">
                        <p className=" font-poppins text-center">Bem-vindo ao Top Care, o seu destino online
                            para cuidados de alta qualidade para animais de estimação! Fundada em 2010, a Top Care
                            surgiu da união de amantes de animais com uma visão compartilhada: tornar os cuidados
                            com os pets mais acessíveis, convenientes e personalizados.</p>
                    </div>
                </div>
                <div className="md:w-[15%] md:-ml-[20%] md:mt-4 md:flex hidden">
                    <img src="/assets/patinhas.png" alt="trilhas de patas" />
                </div>
            </section>
            <section>
                <TituloLinha titulo="Sobre a História da Nossa Empresa " />
                <div className="flex md:flex-row flex-col items-center">
                    <div className="w-[60%]">
                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify">Tudo começou com uma ideia de transformar a
                                paixão por animais em algo mais. A visão de criar uma comunidade onde todos os animais
                                pudessem encontrar produtos de qualidade e
                                amorosos cuidados começou a ganhar forma para se tornar a Top Care de hoje.</p>
                        </div>
                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify">A ideia inicial era simples, mas carregada de propósito: proporcionar aos tutores de animais
                                um pet shop confiável e, acima de tudo, centrado no bem-estar de seus bichinhos. </p>
                        </div>
                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify">Com muita dedicação e trabalho árduo, o pet shop deu certo. Desde então estivemos fazendo
                                nosso melhor, com a  nossa seleção cuidadosa de produtos, funcionários dispostos a
                                trabalharem de forma digna e competente e agora deste ambiente virtual para disponibilizar
                                nossos serviços e produtos de forma online, cada detalhe foi pensado com carinho.</p>
                        </div>
                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify">Hoje em dia a empresa se expandiu e se encontra em outras cidades, onde busca espalhar
                                o nosso bom trabalho e dedicação. Até mesmo os nomes fictícios dos nossos mascotes, Luna e Simba,
                                buscam transmitir o espírito familiar e afetuoso que buscamos nutrir dentro da Top Care.</p>
                        </div>
                    </div>
                    <div className="w-[40%] md:mt-1 mt-4">
                        <img src="/assets/cachorro-brincando.png" alt="cachorro correndo atras da bola" />
                    </div>
                </div>
            </section>


            <section>
                <TituloLinha titulo="Nossa missão, visão e valores" />
                <div className="flex md:flex-row flex-col">
                    <div className="w-[40%] md:mt-1 mt-4 flex justify-end ">
                        <img src="/assets/gato-olhando-para-o-horizonte.png" alt="Um gato olhando para o horizonte" />
                    </div>
                    <div className="w-[60%]">
                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify">A Top Care preza prioritariamente pelo bem estar de seus clientes e por isso tem como missão
                                oferecer produtos e serviços de alta qualidade, permitindo assim que tantos seus pets quanto
                                seus donos aproveitem da melhor maneria possível pagando um preço justo. Com nosso constante
                                crescimento, visamos ser referência no mercado nacional de  pet shops, oferendo nossos
                                produtos e serviços por todo o país seguindo valores como: </p>
                        </div>


                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify"><b>Qualidade:</b> Buscamos sempre garantir a qualidade de nossos serviços e produtos, para garantir a
                                satisfação de nossos clientes.</p>
                        </div>


                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify"><b>Colaboração:</b> Incentivamos o bom convívio entre colaboradores Top Care, para que seu ambiente
                                de trabalho seja proveitoso e os permitam entregar seu melhor.</p>
                        </div>


                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify"><b>Suporte aos clientes:</b> Nossa empresa busca deixar tudo claro o bastante para que os clientes
                                compreendam exatamente o que está acontecendo e se dispõe a esclarecer toda e qualquer dúvida
                                que nossos serviços possam causar.</p>
                        </div>


                        <div className="w-[85%] md:mx-14 md:p-6 mx-4 p-2">
                            <p className=" font-poppins text-justify"><b>Amor aos animais:</b> Acima de tudo, nossa empresa demonstra um amor genuíno e respeito pelos pets.
                                Isso se traduz em nossos produtos e serviços que promovem o bem-estar dos pets, sempre com
                                compaixão e ética.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

