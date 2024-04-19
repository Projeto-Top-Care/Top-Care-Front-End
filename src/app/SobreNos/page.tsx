import TituloLinha from "@/components/TituloLinha/TituloLinha"


export default function sobreNos() {
    return (
        <main className="bg-branco w-full">
            <section className="flex w-full mb-8 bg-terciaria md:mt-10">
                <div className="p-4 w-full h-[100%] flex justify-center items-center md:pt-6">
                    <div className="w-[90%] md:w-[50%] md:my-4">
                        <p className="font-poppins text-justify text-sm md:text-center md:text-base">Bem-vindo ao Top Care, o seu destino online
                            para cuidados de alta qualidade para animais de estimação! Fundada em 2010, a Top Care
                            surgiu da união de amantes de animais com uma visão compartilhada: tornar os cuidados
                            com os pets mais acessíveis, convenientes e personalizados.</p>
                    </div>
                </div>
                <div className="md:flex md:mt-[15%] md:-ml-[28%] hidden">
                    <img className="object-contain md:w-[70%]" src="/assets/patinhas.png" alt="trilhas de patas" />
                </div>
            </section>

            <section>
                <TituloLinha titulo="Sobre a História da Nossa Empresa " />
                <div className="flex flex-col items-center">
                    <div className="md:w-[100%] w-[100%]">
                        <div className="w-[98%] p-2 text-sm md:w-[85%] md:mx-14 md:px-6 md:text-base">
                            <p className=" font-poppins text-justify md:mx-0 mx-4">Tudo começou com uma ideia de transformar a
                                paixão por animais em algo mais. A visão de criar uma comunidade onde todos os animais
                                pudessem encontrar produtos de qualidade e
                                amorosos cuidados começou a ganhar forma para se tornar a Top Care de hoje.</p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4">A ideia inicial era simples,
                                mas carregada de propósito: proporcionar aos donos de animais
                                um pet shop confiável e, acima de tudo, centrado no bem-estar de seus bichinhos. </p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4">Com muita dedicação e trabalho árduo, o pet shop deu certo. Desde então estivemos fazendo
                                nosso melhor, com a  nossa seleção cuidadosa de produtos, funcionários dispostos a
                                trabalharem de forma digna e competente e agora deste ambiente virtual para disponibilizar
                                nossos serviços e produtos de forma online, cada detalhe foi pensado com carinho.</p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4">Hoje em dia a empresa se expandiu e se encontra em outras cidades, onde busca espalhar
                                o nosso bom trabalho e dedicação. Até mesmo os nomes fictícios dos nossos mascotes, Luna e Simba,
                                buscam transmitir o espírito familiar e afetuoso que buscamos nutrir dentro da Top Care.</p>
                        </div>
                    </div>
                    <div className="w-[70%] mt-4 flex justify-center md:mt-8 md:w-[80%]">
                        <img className="md:w-[100%] md:h-[70%] md:hidden" src="/assets/cachorro-brincando.png" alt="cachorro correndo atras da bola" />
                        <img className="hidden md:flex md:w-[100%] md:h-[70%] md:rounded" src="/assets/banner-cachorro-brincando.png" alt="banner pra tablet"/>
                    </div>
                </div>
            </section>
            
            <section className="py-8">
                <TituloLinha titulo="Nossa missão, visão e valores" />
                <div className="flex flex-col-reverse items-center">
                    <div className="w-[70%] mt-4 flex justify-center md:mt-8 md:w-[80%]">
                        <img src="/assets/gato-coberto.jpg" alt="cachorro correndo atras da bola" />
                    </div>
                    <div className="md:w-[100%] w-[100%]">
                        <div className="w-[98%] p-2 text-sm md:w-[85%] md:mx-14 md:px-6 md:text-base">
                            <p className=" font-poppins text-justify md:mx-0 mx-4">A Top Care preza prioritariamente pelo bem estar de seus clientes e por isso tem como missão
                                oferecer produtos e serviços de alta qualidade, permitindo assim que tantos seus pets quanto
                                seus donos aproveitem da melhor maneria possível pagando um preço justo. Com nosso constante
                                crescimento, visamos ser referência no mercado nacional de  pet shops, oferendo nossos
                                produtos e serviços por todo o país seguindo valores como: </p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4"><b>Qualidade:</b> Buscamos sempre garantir a qualidade de nossos serviços e produtos, para garantir a
                                satisfação de nossos clientes.</p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4"><b>Colaboração:</b> Incentivamos o bom convívio entre colaboradores Top Care, para que seu ambiente
                                de trabalho seja proveitoso e os permitam entregar seu melhor.</p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4"><b>Suporte aos clientes:</b> Nossa empresa busca deixar tudo claro o bastante para que os clientes
                                compreendam exatamente o que está acontecendo e se dispõe a esclarecer toda e qualquer dúvida
                                que nossos serviços possam causar.</p>
                            <p className=" font-poppins text-justify md:mx-0 mx-4 mt-4"><b>Amor aos animais:</b> Acima de tudo, nossa empresa demonstra um amor genuíno e respeito pelos pets.
                                Isso se traduz em nossos produtos e serviços que promovem o bem-estar dos pets, sempre com
                                compaixão e ética.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}



