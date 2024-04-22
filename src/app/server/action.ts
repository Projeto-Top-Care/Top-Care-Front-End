'use server';
import {guardarFormularios} from './formularios'

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        atendimento: formData.get('atendimento'),
        filial: formData.get('filial'),
        servico: formData.get('servico'),
        data: formData.get('data'),
        horario: formData.get('horario'),
        descricao: formData.get('descricao')
      };
      guardarFormularios(rawFormData, rawFormData.atendimento!)

}