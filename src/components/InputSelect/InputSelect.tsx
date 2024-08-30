'use client'
import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import Select from '../Select/Select'
import { buscarEspecies } from '@/server/especie/especie';
import { buscarFuncionariosSimples } from '@/server/usuario/funcionario';
import { PetsProps } from '@/types/servicos';

interface InputSelectProps {
  type: "Animais" | "Profissionais"
  jaSelecionados: PetsProps[];
  setSelecionados: React.Dispatch<React.SetStateAction<PetsProps[]>>
}

export default function InputSelect({ type, jaSelecionados, setSelecionados }: InputSelectProps) {

  const [selecaoPadrao, setSelecaoPadrao] = useState<PetsProps[]>([])

  const [opcoes, setOpcoes] = useState<string[]>([]);

  const [naoSelecionados, setNaoSelecionados] = useState<PetsProps[]>([])
  const [selecao, setSelecao] = useState<string>("")

  useEffect(() => {
    const func = async () => {
      let opcoes: PetsProps[] = []
      if (type == "Animais") {
        opcoes = await buscarEspecies()
      } else {
        opcoes = await buscarFuncionariosSimples() || []
      }
      setSelecaoPadrao(opcoes)

      if (jaSelecionados) {
        jaSelecionados?.forEach((selecao) => {
          opcoes = opcoes.filter((selec) => {
            return selecao.nome != selec.nome
          })
        })
      }

      setNaoSelecionados(opcoes)
      const opcoesNome = opcoes.map((opcao: any) => {
        return opcao.nome
      })
      setOpcoes(opcoesNome)
    }

    func()
  }, [])

  useEffect(() => {
    if (selecaoPadrao.length > 0) {
      if (selecao != "") {

        let selecionado: PetsProps = {} as PetsProps;

        naoSelecionados.forEach((selec) => {
          if (selec.nome == selecao) {
            selecionado = selec
          }
        })
        setSelecionados([...jaSelecionados, selecionado])

        let selecaosRemovido = [...naoSelecionados].filter((selec) => {
          return selec.nome != selecao
        })
        setNaoSelecionados(selecaosRemovido)
        setarOpcoes(selecaosRemovido)
      }
    }

  }, [selecao])

  const setarOpcoes = (lista: PetsProps[]) => {
    let opcao = lista.map((opcao) => {
      return opcao.nome
    })
    setOpcoes(opcao)
  }

  const removerSelecionado = (nome: string) => {
    let selecaosRemovido = [...jaSelecionados].filter((animal) => {
      return animal.nome != nome
    })
    setSelecionados(selecaosRemovido)

    let newAnimais: PetsProps[] = [];

    selecaoPadrao.forEach((animal) => {
      let cont = 0;

      selecaosRemovido.forEach((selecaoi) => {
        if (animal.nome == selecaoi.nome) {
          cont++
        }
      })

      if (cont == 0) {
        newAnimais.push(animal)
      }
    })
    setNaoSelecionados(newAnimais)
    setarOpcoes(newAnimais)

  }


  return (
    <div >
      <Select label={type} opcao="" opcaoSelecionada={setSelecao} options={opcoes} />
      <div className='flex flex-row flex-wrap gap-1 mt-2'>
        {
          jaSelecionados.map((selecaos) => (
            <div key={selecaos.id} className='border border-roxo-select rounded flex flex-row items-center justify-center gap-1 px-1'>
              <p className='font-poppins text-roxo-select text-sm select-none font-medium'>{selecaos.nome}</p>
              <p className='font-poppins text-sm text-roxo-select cursor-pointer' onClick={() => removerSelecionado(selecaos.nome)}><IoIosClose size={23} /></p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
