'use client'
import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import Select from '../Select/Select'
import { animais } from '@/utils/pets'
import { buscarEspecies } from '@/server/especie/especie';
import { buscarFuncionarios } from '@/server/usuario/funcionario';

interface selecaoInput {
  id: number,
  nome: string
}

interface InputSelectProps {
  type: "Animais" | "Profissionais"
}

export default function InputSelect({ type }: InputSelectProps) {

  const [selecaoPadrao, setSelecaoPadrao] = useState<selecaoInput[]>([])

  const [opcoes, setOpcoes] = useState<string[]>([]);

  const [naoSelecionados, setNaoSelecionados] = useState<selecaoInput[]>([])
  const [selecionados, setSelecionados] = useState<selecaoInput[]>([])
  const [selecao, setSelecao] = useState<string>("")


  useEffect(() => {
    const func = async () => {
      let opcoes
      if (type == "Animais") {
        opcoes = await buscarEspecies()
      } else {
        opcoes = await buscarFuncionarios()
      }
      setSelecaoPadrao(opcoes)
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

        let selecionado: selecaoInput = {} as selecaoInput;
        console.log(selecaoPadrao)
        console.log(naoSelecionados)
        naoSelecionados.forEach((selec) => {
          if (selec.nome == selecao) {
            selecionado = selec
          }
        })
        setSelecionados([...selecionados, selecionado])

        let selecaosRemovido = [...naoSelecionados].filter((selec) => {
          return selec.nome != selecao
        })
        setNaoSelecionados(selecaosRemovido)
      }
    }

  }, [selecao])

  const removerSelecionado = (nome: string) => {
    let selecaosRemovido = [...selecionados].filter((animal) => {
      return animal.nome != nome
    })
    setSelecionados(selecaosRemovido)

    let newAnimais: selecaoInput[] = [];

    selecaoPadrao.forEach((animal) => {
      let cont = 0;

      selecaosRemovido.forEach((selecaoi) => {
        if (animal == selecaoi) {
          cont++
        }
      })

      if (cont == 0) {
        newAnimais.push(animal)
      }
    })
    setNaoSelecionados(newAnimais)

  }


  return (
    <div >
      <Select label={type} opcao="" opcaoSelecionada={setSelecao} options={opcoes} />
      <div className='flex flex-row flex-wrap gap-1 mt-2'>
        {
          selecionados.map((selecaos) => (
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
