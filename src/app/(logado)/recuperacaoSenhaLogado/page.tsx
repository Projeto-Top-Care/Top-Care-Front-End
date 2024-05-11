'use client'
import Loading from '@/app/(deslogado)/loading/page'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import { buscarUsuario } from '@/server/usuario/action'
import { Usuario } from '@/types/usuarios'
import { useEffect, useState } from 'react'

interface PropsUsuario {
  searchParams: { id: number };
}

export default function RecuperacaoSenhaDeslogado({
  searchParams,
}: PropsUsuario) {
  const [usuarioProcurado, setUsuarioProcurado] = useState<Usuario>();
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(false);

  const esconderEmail = (email: string) => {
    const arrayEmail = email.split("@");
    const emailEscondido = arrayEmail[0].split("");
    const emailFinal = emailEscondido.map((letra, i) => {
      return i == 0 ? letra : "*";
    });
    return emailFinal.join("") + "@" + arrayEmail[1];
  };

  const esconderCelular = (celular: string) => {
    const arrayCelular = celular.split("-");
    const celularEscondido = arrayCelular[0].split("");
    const celularFinal = celularEscondido.map((numero, i) => {
      return i < 8 ? numero : "*";
    });
    return celularFinal.join("") + "-" + arrayCelular[1];
  };

  useEffect(() => {
    setUsuarioProcurado(buscarUsuario(searchParams.id));
  }, []);

  return (
    <main>
      {!usuarioProcurado ? (
        <div>Carregando...</div>
      ) : (
        <section className="mt-11">
          <div className="flex flex-col justify-center items-center md:mt-[5%] mt-[10%]">
            <div className="flex flex-col justify-center items-center gap-3 lg:w-[31%] md:w-[50%] w-[90%] text-center">
              <h1 className="font-averia md:text-3xl text-xl font-bold text-preto">
                Quero receber o código por
              </h1>
              <p className="font-poppins text-preto md:text-sm text-xs text-center">
                Escolha entre receber em seu email ou número de telefone
                cadastrado.
              </p>
            </div>
            <section className="lg:w-[31%] md:w-[50%] w-[90%] mt-8">
              <div
                className="border rounded border-cinza p-1 flex items-center gap-4 "
                onClick={() => {
                  setChecked1(true);
                  setChecked2(false);
                }}
              >
                <div className="inline-flex items-center md:ml-4 ml-2">
                  <label
                    className="relative flex items-center md:p-3 p-2 rounded-full cursor-pointer"
                    htmlFor="primeira"
                  >
                    <input
                      id="primeira"
                      checked={checked1}
                      type="radio"
                      className="md:h-6 md:w-6 h-4 w-4 before:content[''] peer relative cursor-pointer appearance-none rounded-full md:border-2 border border-secundaria text-blue-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray before:opacity-0 before:transition-opacity checked:border-secundaria checked:before:bg-secundaria"
                      name="radio-10"
                    />
                    <span className="absolute text-secundaria transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-3 md:w-3 h-2 w-2"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px font-poppins text-cinza-escuro md:text-base text-xs cursor-pointer select-none"
                    htmlFor="primeira"
                  >
                    {esconderEmail(usuarioProcurado?.email)}
                  </label>
                </div>
              </div>

              <div
                className="border rounded border-cinza p-1 mt-4 flex items-center gap-4 "
                onClick={() => {
                  setChecked2(true);
                  setChecked1(false);
                }}
              >
                <div className="inline-flex items-center md:ml-4 ml-2">
                  <label
                    className="relative flex items-center md:p-3 p-2 rounded-full cursor-pointer"
                    htmlFor="segunda"
                  >
                    <input
                      id="segunda"
                      checked={checked2}
                      type="radio"
                      className="md:h-6 md:w-6 h-4 w-4 before:content[''] peer relative cursor-pointer appearance-none rounded-full md:border-2 border border-secundaria text-blue-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray before:opacity-0 before:transition-opacity checked:border-secundaria checked:before:bg-secundaria"
                      name="radio-10"
                    />
                    <span className="absolute text-secundaria transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-3 md:w-3 h-2 w-2 "
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px font-poppins text-cinza-escuro md:text-base text-xs cursor-pointer select-none"
                    htmlFor="segunda"
                  >
                    {esconderCelular(usuarioProcurado?.celular)}
                  </label>
                </div>
              </div>
            </section>
            <div className="lg:w-[31%] md:w-[50%] w-[90%] md:mb-[10%] mb-[20%] md:mt-8 mt-4">
              <BotaoGrande
                title="Continuar"
                type="submit"
                background="bg-secundaria"
              />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
